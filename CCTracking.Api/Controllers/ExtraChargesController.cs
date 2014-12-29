
using System;
using System.Web.Http;
using CCTracking.DAL;
using CCTracking.Dto;
using CCTracking.Dto.Response;

namespace CCTracking.Api.Controllers
{
    public class ExtraChargesController : ApiController
    {
        [HttpGet]
        public ExtraChargesResponse GetById(int id)
        {
            DBFacade facade = new ExtraChargesDal();
            BaseModelResponse baseModelResponse = facade.GetByCriteria(new ExtraCharges{ BookingId = id });
            ExtraChargesResponse extraChargesResponse = (ExtraChargesResponse)baseModelResponse;
            DalService service = new DalService();
            if (extraChargesResponse != null && extraChargesResponse.ExtraChargesList.Count > 0)
            {
                BusResponse busResponse = (BusResponse)service.GetBuslistByBookingId(extraChargesResponse.ExtraChargesList[0].BookingId);
                foreach (ExtraCharges each in extraChargesResponse.ExtraChargesList)
                {
                    each.BusList = busResponse.BusList;
                }
            }
            return extraChargesResponse;
        }

        [HttpPost]
        public ExtraCharges SaveExtraCharges(ExtraCharges extraCharges)
        {
            if (extraCharges != null)
            {
                //booking.Id = rowCounter++;
                DBFacade facade = new ExtraChargesDal();
                if (extraCharges.Id <= 0)
                {
                    extraCharges.CreatedDate = extraCharges.ModifiedDate = DateTime.Today;
                    extraCharges.CreatedBy = extraCharges.ModifiedBy;
                }
                else
                {
                    extraCharges.ModifiedDate = DateTime.Today;
                }
                //extraCharges.AmountDeducted = extraCharges.ActualBookingAmount - extraCharges.RefundAmount;
                BaseModelResponse extraChargesResponse = facade.Execute(extraCharges);

                if (!string.IsNullOrEmpty(extraChargesResponse.ErrorMessage))
                {
                    extraCharges.ErrorMessage = extraChargesResponse.ErrorMessage;
                }
                else
                {
                    extraCharges = ((ExtraChargesResponse) extraChargesResponse).ExtraChargesModel;
                }
            }
            return extraCharges;
        }
    }
}
