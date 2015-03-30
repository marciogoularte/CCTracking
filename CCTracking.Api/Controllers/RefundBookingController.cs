using System.Collections.Generic;
using CCTracking.DAL;
using CCTracking.Dto;
using CCTracking.Dto.Response;
using System;
using System.Web.Http;
using CCTracking.Api.App_Start;

namespace CCTracking.Api.Controllers
{
    [BasicHttpAuthorize]
    public class RefundBookingController : ApiController
    {
        [HttpPost]
        public CCTracking.Dto.RefundBooking SaveRefundBooking(CCTracking.Dto.RefundBooking refundBooking)
        {
            if (refundBooking != null)
            {
                //booking.Id = rowCounter++;
                DBFacade facade = new CCTracking.DAL.RefundBookingDal();
                if (refundBooking.Id <= 0)
                {
                    refundBooking.CreatedDate = refundBooking.ModifiedDate = DateTime.Today;
                    refundBooking.CreatedBy = refundBooking.ModifiedBy;
                }
                else
                {
                    refundBooking.ModifiedDate = DateTime.Today;
                }
                refundBooking.AmountDeducted = refundBooking.ActualBookingAmount - refundBooking.RefundAmount;
                BaseModelResponse refundBookingResponse = facade.Execute(refundBooking);

                if (!string.IsNullOrEmpty(refundBookingResponse.ErrorMessage))
                {
                    refundBooking.ErrorMessage = refundBookingResponse.ErrorMessage;
                }
                else
                {
                    refundBooking = ((RefundBookingResponse)refundBookingResponse).RefundBookingModel;
                }
            }
            return refundBooking;
        }

        [HttpGet]
        public LookupResponse RefundBookingDefault()
        {
            DBFacade facade = new CCTracking.DAL.LookupDal();
            BaseModelResponse baseModelResponse = facade.ExecuteDs(null);
            LookupResponse lookupResponse = (LookupResponse)baseModelResponse;
            return lookupResponse;
        }

        //[HttpGet]
        //public CentreResponse GetAll(string a)
        //{
        //    DBFacade facade = new CCTracking.DAL.CentreDal();
        //    BaseModelResponse baseModelResponse = facade.GetAll();
        //    CentreResponse centreResponse = (CentreResponse)baseModelResponse;
        //    return centreResponse;
        //}

        [HttpGet]
        public RefundBookingResponse GetById(int id)
        {
            DBFacade facade = new CCTracking.DAL.RefundBookingDal();
            BaseModelResponse baseModelResponse = facade.GetByCriteria(new RefundBooking {BookingId = id});
            RefundBookingResponse refundBookingResponse = (RefundBookingResponse)baseModelResponse;
            DalService service=new DalService();
            if (refundBookingResponse != null && refundBookingResponse.RefundBookingList.Count > 0)
            {
                BusResponse busResponse = (BusResponse) service.GetBuslistByBookingId(refundBookingResponse.RefundBookingList[0].BookingId);

                foreach (RefundBooking each in refundBookingResponse.RefundBookingList)
                {
                    each.BusList = busResponse.BusList;
                }
                //refundBookingResponse.RefundBookingList.BusList = busResponse.BusList;
            }
            
            return refundBookingResponse;
        }
    }
}
