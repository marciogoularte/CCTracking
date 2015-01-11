using CCTracking.DAL;
using CCTracking.Dto;
using CCTracking.Dto.Response;
using System;
using System.Web.Http;

namespace CCTracking.Api.Controllers
{
    public class PaymentController : ApiController
    {
        [HttpPost]
        public Payment SaveBooking(Payment payment)
        {
            if (payment != null)
            {
                if (payment.Id <= 0)
                {
                    payment.CreatedDate = payment.ModifiedDate = DateTime.Today;
                    payment.CreatedBy = payment.ModifiedBy;

                    payment.BusVisits.ForEach(b => { b.CreatedBy = payment.CreatedBy; b.ModifiedBy = payment.ModifiedBy; b.CreatedDate = payment.CreatedDate; b.ModifiedDate = payment.ModifiedDate; });
                    //for new record, payment through easyPaisa is unpaid
                    if (payment.IsReferralBooking && payment.IsReferralBookingPaid)
                    {
                        if ((PaymentTypes)payment.PaymentType == PaymentTypes.Cash)
                        {
                            payment.PaymentStatus = 1;
                        }
                        else
                        {
                            payment.PaymentStatus = 0;
                        }
                    }
                    else if (payment.IsReferralBooking && !payment.IsReferralBookingPaid)
                    {
                        payment.PaymentStatus = 0;
                       // payment.EasyPaisaTranNo = string.Empty;
                    }
                    else
                    {
                        if (((PaymentTypes)payment.PaymentType == PaymentTypes.Cash) )
                        {
                            payment.PaymentStatus = 1;
                        }
                        else
                        {
                            payment.PaymentStatus = 0;
                        }
                    }
                }
                else //edit
                {
                    if (payment.IsReferralBooking && payment.IsReferralBookingPaid)
                    {
                        if (((PaymentTypes)payment.PaymentType == PaymentTypes.Cash) || ((PaymentTypes)payment.PaymentType == PaymentTypes.EasyPaisa && !string.IsNullOrEmpty(payment.EasyPaisaTranNo)))
                        {
                            payment.PaymentStatus = 1;
                        }
                        else
                        {
                            payment.PaymentStatus = 0;
                            //payment.EasyPaisaTranNo = string.Empty;
                        }
                    }
                    else if (payment.IsReferralBooking && !payment.IsReferralBookingPaid)
                    {
                        payment.PaymentStatus = 0;
                        //payment.EasyPaisaTranNo = string.Empty;
                    }
                    else
                    {
                        if (((PaymentTypes)payment.PaymentType == PaymentTypes.Cash) || ((PaymentTypes)payment.PaymentType == PaymentTypes.EasyPaisa && !string.IsNullOrEmpty(payment.EasyPaisaTranNo)))
                        {
                            payment.PaymentStatus = 1;
                        }
                        else
                        {
                            payment.PaymentStatus = 0;
                            //payment.EasyPaisaTranNo = string.Empty;
                        }
                    }
                    payment.ModifiedDate = DateTime.Today;
                    payment.BusVisits.ForEach(b => { b.ModifiedBy = payment.ModifiedBy; b.ModifiedDate = payment.ModifiedDate; });
                }

                DalService service = new DalService();
                BaseModelResponse paymentResponse = service.SavePayment(payment);
                if (!string.IsNullOrEmpty(paymentResponse.ErrorMessage))
                {
                    payment.ErrorMessage = paymentResponse.ErrorMessage;
                }
                else
                {
                    payment = ((PaymentResponse)paymentResponse).PaymentModel;
                }


            }
            return payment;
        }
        [HttpGet]
        public PaymentResponse GetById(int id)
        {
            PaymentResponse paymentResponse = null;
            if (id > 0)
            {
                DalService service = new DalService();
                BaseModelResponse baseModelResponse = service.GetPaymentById(id);
                paymentResponse = (PaymentResponse)baseModelResponse;
            }
            return paymentResponse;
        }


    }
}
