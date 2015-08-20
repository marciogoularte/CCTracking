using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using CCTracking.Api.App_Start;
using CCTracking.Api.Helpers;
using CCTracking.DAL;
using CCTracking.Dto;
using CCTracking.Dto.Response;
using System.Web.Http;

namespace CCTracking.Api.Controllers
{
    //[BasicHttpAuthorize]
    public class BookingController : ApiController
    {       
        static int rowCounter = 1;
        [HttpPost]
        public Booking SaveBooking(Booking booking)
        {            
            //Logger.WriteLog("Save booking started at: " + DateTime.Now);
            if (booking != null)
            {
                if (booking.Id <= 0)
                {
                    booking.CreatedDate = booking.ModifiedDate = DateTime.Today;
                    booking.CreatedBy = booking.ModifiedBy;
                }
                else
                {
                    booking.ModifiedDate = DateTime.Today;

                }
                DBFacade facade = new BookingDal();
                BaseModelResponse bookingResponse = facade.Execute(booking);
                if (!string.IsNullOrEmpty(bookingResponse.ErrorMessage))
                {
                    booking.ErrorMessage = bookingResponse.ErrorMessage;
                }
                else
                {
                    booking = ((BookingResponse)bookingResponse).BookingModel;
                }
            }
            //get rid of alerts from each file, a generic implementation is done on helper
            booking.EntityType = "Booking";
            //Logger.WriteLog("Save booking end at: " + DateTime.Now);
            return booking;
        }

        [HttpGet]
        public LookupResponse BookingDefault()
        {
            DBFacade facade = new LookupDal();
            BaseModelResponse baseModelResponse = facade.ExecuteDs(null);
            LookupResponse lookupResponse = (LookupResponse)baseModelResponse;
            return lookupResponse;
        }
        [HttpGet]
        //[WebApiOutputCache(120,60,false)]
        public BaseModelResponse GetAll(int a)
        {
            DBFacade facade = new BookingDal();
            facade.IsGridDisplay = true;
            SearchCriteria criteria = new SearchCriteria { Id = a, FromBookingDate = facade.GetStartDate(), ToBookingDate = DateTime.Today };
            BaseModelResponse baseModelResponse = facade.GetByCriteria(criteria);
            return baseModelResponse;
        }
        [HttpGet]
        public BookingResponse GetById(int id)
        {
            DBFacade facade = new BookingDal();
            BaseModelResponse baseModelResponse = facade.GetById(id);
            BookingResponse bookingResponse = (BookingResponse)baseModelResponse;
            return bookingResponse;
        }

        //private bool IsValidAuthenticationToken()
        //{
        //    IEnumerable<string> headerList = null;
        //    if (Request.Headers.TryGetValues("AuthenticationToken", out headerList))
        //    {
        //        string authenticationToken = headerList.FirstOrDefault();
        //        Guid authenticationGuid = Guid.Empty;
        //        try
        //        {
        //            if (Guid.TryParse(Security.Decrypt(authenticationToken), out authenticationGuid))
        //            {
        //                return true;
        //            }
        //            else
        //            {
        //                throw new HttpResponseException(new HttpResponseMessage(System.Net.HttpStatusCode.Unauthorized)
        //                {
        //                    Content = new StringContent("Invalid Authentication Token")
        //                });
        //            }
        //        }
        //        catch (Exception exp)
        //        {
        //            throw new HttpResponseException(new HttpResponseMessage(System.Net.HttpStatusCode.Unauthorized)
        //            {
        //                Content = new StringContent("Invalid Authentication Token")
        //            });
        //        }
        //    }
        //    else
        //    {
        //        return false;
        //    }
        //}

    }
}