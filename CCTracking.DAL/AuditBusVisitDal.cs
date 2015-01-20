using System;
using System.Collections.Generic;
using System.Data;
using CCTracking.Dto;
using CCTracking.Dto.Audit;
using CCTracking.Dto.Response;

namespace CCTracking.DAL
{
    public class AuditBusVisitDal : DBFacade
    {

        protected override BaseModelResponse ConvertToModel(IDataReader dr)
        {
            throw new NotImplementedException();
        }

        protected override BaseModelResponse ConvertToList(IDataReader dr)
        {
            BusVisitResponse response = new BusVisitResponse();
            AuditBusVisit busVisit = null;
            List<AuditBusVisit> busVisits = new List<AuditBusVisit>();
            while (dr.Read())
            {
                busVisit = new AuditBusVisit();
                MapValues(busVisit, dr);
                busVisits.Add(busVisit);
            }
            response.AuditBusVisitList = busVisits;
            return response;
        }

        protected override BaseModelResponse ConvertToList(DataSet ds)
        {
            throw new NotImplementedException();
        }

        protected override string GetByIdSql(int id, Dictionary<string, object> dictionary)
        {
            throw new NotImplementedException();
        }

        protected override string DelByIdSql(int id, Dictionary<string, object> dictionary)
        {
            throw new NotImplementedException();
        }

        protected override string GetCountSql()
        {
            throw new NotImplementedException();
        }

        protected override string GetAllSql()
        {
            throw new NotImplementedException();
        }

        protected override string GetByCriteriaSql(BaseModel baseModel, Dictionary<string, object> dictionary)
        {
            AuditRequest auditRequest = (AuditRequest)baseModel;
            dictionary.Add("@FromDate", auditRequest.FromDate);
            dictionary.Add("@ToDate", auditRequest.ToDate);
            return "[dbo].[Audit_BusVisit]";
        }
        protected virtual void MapValues(BaseModel baseModel, IDataReader dr)
        {
            //base.MapValues(baseModel, dr);
            AuditBusVisit visit = baseModel as AuditBusVisit;

            if (dr.IsColumnExists("opType"))
                visit.OperationType = dr.GetInt32(dr.GetOrdinal("opType"));

            if (dr.IsColumnExists("Id"))
                visit.Id = dr.GetInt32(dr.GetOrdinal("Id"));

            if (dr.IsColumnExists("UserName") && !dr.IsDBNull(dr.GetOrdinal("UserName")))
                visit.UserName = dr.GetString(dr.GetOrdinal("UserName"));

            if (dr.IsColumnExists("CentreId") && !dr.IsDBNull(dr.GetOrdinal("CentreId")))
                visit.CentreId = dr.GetString(dr.GetOrdinal("CentreId"));

            if (dr.IsColumnExists("BusId") && !dr.IsDBNull(dr.GetOrdinal("BusId")))
                visit.BusId = dr.GetString(dr.GetOrdinal("BusId"));

            if (dr.IsColumnExists("DriverId") && !dr.IsDBNull(dr.GetOrdinal("DriverId")))
                visit.DriverId = dr.GetString(dr.GetOrdinal("DriverId"));

            if (dr.IsColumnExists("VisitTypeId") && !dr.IsDBNull(dr.GetOrdinal("VisitTypeId")))
                visit.VisitTypeId = dr.GetString(dr.GetOrdinal("VisitTypeId"));

            if (dr.IsColumnExists("BookingId") && !dr.IsDBNull(dr.GetOrdinal("BookingId")))
                visit.BookingId = dr.GetInt32(dr.GetOrdinal("BookingId"));

            if (dr.IsColumnExists("InchargeName") && !dr.IsDBNull(dr.GetOrdinal("InchargeName")))
                visit.InchargeName = dr.GetString(dr.GetOrdinal("InchargeName"));

            if (dr.IsColumnExists("VisitDate") && !dr.IsDBNull(dr.GetOrdinal("VisitDate")))
                visit.VisitDate = dr.GetString(dr.GetOrdinal("VisitDate"));

            if (dr.IsColumnExists("OutTime") && !dr.IsDBNull(dr.GetOrdinal("OutTime")))
                visit.OutTime = dr.GetString(dr.GetOrdinal("OutTime"));

            if (dr.IsColumnExists("ReturnTime") && !dr.IsDBNull(dr.GetOrdinal("ReturnTime")))
                visit.ReturnTime = dr.GetString(dr.GetOrdinal("ReturnTime"));

            if (dr.IsColumnExists("ReturnDate") && !dr.IsDBNull(dr.GetOrdinal("ReturnDate")))
                visit.ReturnDate = dr.GetString(dr.GetOrdinal("ReturnDate"));

            if (dr.IsColumnExists("ReadingWhenFilling") && !dr.IsDBNull(dr.GetOrdinal("ReadingWhenFilling")))
                visit.ReadingWhenFilling = dr.GetString(dr.GetOrdinal("ReadingWhenFilling"));

            if (dr.IsColumnExists("PumpLocation") && !dr.IsDBNull(dr.GetOrdinal("PumpLocation")))
                visit.PumpLocation = dr.GetString(dr.GetOrdinal("PumpLocation"));

            if (dr.IsColumnExists("FuelRate") && !dr.IsDBNull(dr.GetOrdinal("FuelRate")))
                visit.FuelRate = dr.GetString(dr.GetOrdinal("FuelRate"));

            if (dr.IsColumnExists("FuelAmount") && !dr.IsDBNull(dr.GetOrdinal("FuelAmount")))
                visit.FuelAmount = dr.GetString(dr.GetOrdinal("FuelAmount"));

            if (dr.IsColumnExists("Receipt") && !dr.IsDBNull(dr.GetOrdinal("Receipt")))
                visit.Receipt = dr.GetString(dr.GetOrdinal("Receipt"));

            if (dr.IsColumnExists("IsBookingCompleted") && !dr.IsDBNull(dr.GetOrdinal("IsBookingCompleted")))
                visit.IsBookingCompleted = dr.GetString(dr.GetOrdinal("IsBookingCompleted"));

            if (dr.IsColumnExists("InitialReading") && !dr.IsDBNull(dr.GetOrdinal("InitialReading")))
                visit.InitialReading = dr.GetString(dr.GetOrdinal("InitialReading"));

            if (dr.IsColumnExists("FinalReading") && !dr.IsDBNull(dr.GetOrdinal("FinalReading")))
                visit.FinalReading = dr.GetString(dr.GetOrdinal("FinalReading"));

            if (dr.IsColumnExists("Description") && !dr.IsDBNull(dr.GetOrdinal("Description")))
                visit.Description = dr.GetString(dr.GetOrdinal("Description"));

            if (dr.IsColumnExists("BusStatus") && !dr.IsDBNull(dr.GetOrdinal("BusStatus")))
                visit.BusStatus = dr.GetString(dr.GetOrdinal("BusStatus"));

            if (dr.IsColumnExists("FuelQuantity") && !dr.IsDBNull(dr.GetOrdinal("FuelQuantity")))
                visit.FuelQuantity = dr.GetString(dr.GetOrdinal("FuelQuantity"));

            if (dr.IsColumnExists("BusChangeReason") && !dr.IsDBNull(dr.GetOrdinal("BusChangeReason")))
                visit.BusChangeReason = dr.GetString(dr.GetOrdinal("BusChangeReason"));

            //if (dr.IsColumnExists("ModifiedBy") && !dr.IsDBNull(dr.GetOrdinal("ModifiedBy")))
            //    visit.ModifiedBy = dr.GetString(dr.GetOrdinal("ModifiedBy"));
            //if (dr.IsColumnExists("ModifiedDate") && !dr.IsDBNull(dr.GetOrdinal("ModifiedDate")))
            //    visit.ModifiedDate = dr.GetString(dr.GetOrdinal("ModifiedDate"));

            if (dr.IsColumnExists("ActualModifiedDate") && !dr.IsDBNull(dr.GetOrdinal("ActualModifiedDate")))
                visit.ActualModifiedDate = dr.GetDateTime(dr.GetOrdinal("ActualModifiedDate"));
        }
    }
}
