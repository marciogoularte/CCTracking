using System;
using System.Collections.Generic;
using System.Web.Http;
using CCTracking.DAL;
using CCTracking.Dto;
using CCTracking.Dto.Audit;
using CCTracking.Dto.Response;

namespace CCTracking.Api.Controllers
{
    public class AuditBusVisitController : ApiController
    {
        [HttpPost]
        public BusVisitResponse GetAllAuditBooking(AuditRequest request)
        {
            
            DBFacade facade = new AuditBusVisitDal();
            BaseModelResponse baseModelResponse = facade.GetByCriteria(request);//(new AuditRequest { FromDate = DateTime.Today.AddYears(-1), ToDate = DateTime.Today.AddYears(1) });
            BusVisitResponse busVisitResponse = (BusVisitResponse)baseModelResponse;
            BusVisitResponse response = TransformResultSet(busVisitResponse.AuditBusVisitList);
            return response;
        }

        private BusVisitResponse TransformResultSet(List<AuditBusVisit> visits)
        {
            BusVisitResponse response = new BusVisitResponse();
            List<AuditDisplay> auditList = new List<AuditDisplay>();
            int counter = 0;
            foreach (AuditBusVisit each in visits)
            {
                each.RowCounter = ++counter;
                if (!string.IsNullOrEmpty(each.CentreId))
                    auditList.Add(SetProperty("CentreId", each.CentreId, each));
                if (!string.IsNullOrEmpty(each.BusId))
                    auditList.Add(SetProperty("BusId", each.BusId, each));
                if (!string.IsNullOrEmpty(each.DriverId))
                    auditList.Add(SetProperty("DriverId", each.DriverId, each));
                if (!string.IsNullOrEmpty(each.VisitTypeId))
                    auditList.Add(SetProperty("VisitTypeId", each.VisitTypeId, each));
                //if (!string.IsNullOrEmpty(each.BookingId))
                //    auditList.Add(SetProperty("BookingId", each.BookingId,ToString(), each));
                if (!string.IsNullOrEmpty(each.InchargeName))
                    auditList.Add(SetProperty("InchargeName", each.InchargeName, each));
                if (!string.IsNullOrEmpty(each.VisitDate))
                    auditList.Add(SetProperty("VisitDate", each.VisitDate, each));
                if (!string.IsNullOrEmpty(each.OutTime))
                    auditList.Add(SetProperty("OutTime", each.OutTime, each));
                if (!string.IsNullOrEmpty(each.ReturnTime))
                    auditList.Add(SetProperty("ReturnTime", each.ReturnTime, each));
                if (!string.IsNullOrEmpty(each.ReturnDate))
                    auditList.Add(SetProperty("ReturnDate", each.ReturnDate, each));
                if (!string.IsNullOrEmpty(each.ReadingWhenFilling))
                    auditList.Add(SetProperty("ReadingWhenFilling", each.ReadingWhenFilling, each));
                if (!string.IsNullOrEmpty(each.PumpLocation))
                    auditList.Add(SetProperty("PumpLocation", each.PumpLocation, each));
                if (!string.IsNullOrEmpty(each.FuelRate))
                    auditList.Add(SetProperty("FuelRate", each.FuelRate, each));
                if (!string.IsNullOrEmpty(each.FuelAmount))
                    auditList.Add(SetProperty("FuelAmount", each.FuelAmount, each));
                if (!string.IsNullOrEmpty(each.ReturnTime))
                    auditList.Add(SetProperty("ReturnTime", each.ReturnTime, each));
                if (!string.IsNullOrEmpty(each.IsBookingCompleted))
                    auditList.Add(SetProperty("IsBookingCompleted", each.IsBookingCompleted, each));
                if (!string.IsNullOrEmpty(each.InitialReading))
                    auditList.Add(SetProperty("InitialReading", each.InitialReading, each));
                if (!string.IsNullOrEmpty(each.FinalReading))
                    auditList.Add(SetProperty("FinalReading", each.FinalReading, each));
                if (!string.IsNullOrEmpty(each.FuelQuantity))
                    auditList.Add(SetProperty("FuelQuantity", each.FuelQuantity, each));
                if (!string.IsNullOrEmpty(each.FuelingReceipt))
                    auditList.Add(SetProperty("FuelingReceipt", each.FuelingReceipt, each));
                if (!string.IsNullOrEmpty(each.Description))
                    auditList.Add(SetProperty("Description", each.Description, each));
                if (!string.IsNullOrEmpty(each.Receipt))
                    auditList.Add(SetProperty("Receipt", each.Receipt, each));
                if (!string.IsNullOrEmpty(each.BusStatus))
                    auditList.Add(SetProperty("BusStatus", each.BusStatus, each));
                //if (!string.IsNullOrEmpty(each.IsActive))
                //    auditList.Add(SetProperty("IsActive", each.IsActive, each));
                //if (!string.IsNullOrEmpty(each.ModifiedBy))
                //    auditList.Add(SetProperty("ModifiedBy", each.ModifiedBy, each));
                //if (!string.IsNullOrEmpty(each.ModifiedDate))
                //    auditList.Add(SetProperty("ModifiedDate", each.ModifiedDate, each));


            }
            response.AuditBusVisitDisplayList = auditList;
            return response;
        }

        private AuditDisplay SetProperty(string propName, string propVal, AuditBusVisit audit)
        {
            return new AuditDisplay
            {
                BookingId = audit.BookingId,
                PropertyName = propName,
                OldValue = propVal.Split('^')[0],
                NewValue = propVal.Split('^')[1],
                ActualModifiedDate = audit.ActualModifiedDate,
                RowCounter = audit.RowCounter,
                UserName = audit.UserName
            };
        }
    }
}
