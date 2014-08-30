using CCTracking.DAL;
using CCTracking.Dto.Response;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace CCTracking.Api.Controllers
{
    public class PaymentController : ApiController
    {
        [HttpPost]
        public CCTracking.Dto.Payment SaveBooking(CCTracking.Dto.Payment payment)
        {
            if (payment != null)
            {
                if (payment.Id <= 0)
                {
                    payment.CreatedDate = payment.ModifiedDate = DateTime.Today;
                    payment.CreatedBy = payment.ModifiedBy;
                }
                else
                {
                    payment.ModifiedDate = DateTime.Today;
                }
                DalService service = new DalService();
                BaseModelResponse paymentResponse = service.SavePayment(payment);
                payment = ((PaymentResponse)paymentResponse).PaymentModel;

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
