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
                //booking.Id = rowCounter++;
                DBFacade facade = new CCTracking.DAL.PaymentDal();
                BaseModelResponse paymentResponse = facade.Execute(payment);
                //var a = facade.Execute(booking);
                payment = ((PaymentResponse)paymentResponse).PaymentModel;
                //bookings.Add(booking);
            }
            return payment;
        }
        [HttpGet]
        public PaymentResponse GetById(int id)
        {
            DBFacade facade = new CCTracking.DAL.PaymentDal();
            BaseModelResponse baseModelResponse = facade.GetById(id);
            PaymentResponse paymentResponse = (PaymentResponse)baseModelResponse;
            return paymentResponse;
        }
    }
}
