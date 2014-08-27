using CCTracking.Dto;
using CCTracking.Dto.Response;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CCTracking.DAL
{
    public class BusVisitDal : DBFacade
    {
        protected override string GetByIdSql(int id, Dictionary<string, object> dictionary)
        {
            dictionary.Add("@BookingId", id);
            return "GetBusVisitById";
        }

        protected override string GetAllSql()
        {
            return "";
        }

        protected override string GetByCriteriaSql(BaseModel baseModel, Dictionary<string, object> dictionary)
        {
            BusVisit busVisit = baseModel as BusVisit;
            dictionary.Add("@CentreId", busVisit.CentreId);
            dictionary.Add("@BusId", busVisit.BusId);
            dictionary.Add("@BookingId", busVisit.BookingId);
            dictionary.Add("@VisitTypeId", busVisit.VisitTypeId);
            dictionary.Add("@DriverId", busVisit.DriverId);
            dictionary.Add("@IsAvailableForBooking", busVisit.IsAvailableForBooking);
            dictionary.Add("@IsAvailableForFutureBooking", busVisit.IsAvailableForFutureBooking);
            return "GetBusVisitByCriteria";
        }

        protected override string ExecuteSql(BaseModel baseModel, Dictionary<string, object> dictionary)
        {
            BusVisit busVisit = baseModel as BusVisit;
            dictionary.Add("@CentreId", busVisit.CentreId);
            dictionary.Add("@BusId", busVisit.BusId);
            dictionary.Add("@BookingId", busVisit.BookingId);
            dictionary.Add("@VisitTypeId", busVisit.VisitTypeId);
            dictionary.Add("@DriverId", busVisit.DriverId);
            dictionary.Add("@IsAvailableForBooking", busVisit.IsAvailableForBooking);
            dictionary.Add("@IsAvailableForFutureBooking", busVisit.IsAvailableForFutureBooking);
            dictionary.Add("@InitialReading", busVisit.InitialReading);
            dictionary.Add("@FinalReading", busVisit.FinalReading);
            base.ExecuteSql(busVisit, dictionary);
            return "dbo.SaveBusVisit";
        }

        protected override BaseModelResponse ConvertToModel(IDataReader dr)
        {
            BusVisitResponse response = new BusVisitResponse();
            BusVisit busVisit = null;
            if (dr.Read())
            {
                busVisit = new BusVisit();
                MapValues(busVisit, dr);
            }
            response.BusVisitModel = busVisit;
            return response;
        }

        protected override BaseModelResponse ConvertToList(IDataReader dr)
        {
            BusVisitResponse response = new BusVisitResponse();
            BusVisit busVisit = null;
            List<BusVisit> busVisits = new List<BusVisit>();
            while (dr.Read())
            {
                busVisit = new BusVisit();
                MapValues(busVisit, dr);
                busVisits.Add(busVisit);
            }
            response.BusVisitList = busVisits;
            return response;
        }

        protected override BaseModelResponse ConvertToList(DataSet ds)
        {
            return null;
        }

        protected override void MapValues(BaseModel baseModel, IDataReader dr)
        {
            base.MapValues(baseModel, dr);
            BusVisit busVisit = baseModel as BusVisit;

            if (!dr.IsDBNull(dr.GetOrdinal("CentreId")))
                busVisit.CentreId = dr.GetInt32(dr.GetOrdinal("CentreId"));
            if (!dr.IsDBNull(dr.GetOrdinal("BusId")))
                busVisit.BusId = dr.GetInt32(dr.GetOrdinal("BusId"));
            if (!dr.IsDBNull(dr.GetOrdinal("DriverId")))
                busVisit.DriverId = dr.GetInt32(dr.GetOrdinal("DriverId"));
            if (!dr.IsDBNull(dr.GetOrdinal("BookingId")))
                busVisit.VisitTypeId = dr.GetInt32(dr.GetOrdinal("CentreId"));
            if (!dr.IsDBNull(dr.GetOrdinal("BookingId")))
                busVisit.BookingId = dr.GetInt32(dr.GetOrdinal("BookingId"));
            if (!dr.IsDBNull(dr.GetOrdinal("IsAvailableForBooking")))
                busVisit.IsAvailableForBooking = dr.GetBoolean(dr.GetOrdinal("IsAvailableForBooking"));
            if (!dr.IsDBNull(dr.GetOrdinal("IsAvailableForFutureBooking")))
                busVisit.IsAvailableForFutureBooking = dr.GetBoolean(dr.GetOrdinal("IsAvailableForFutureBooking"));
            if (!dr.IsDBNull(dr.GetOrdinal("InitialReading")))
                busVisit.InitialReading = dr.GetInt64(dr.GetOrdinal("InitialReading"));
            if (!dr.IsDBNull(dr.GetOrdinal("FinalReading")))
                busVisit.FinalReading = dr.GetInt64(dr.GetOrdinal("FinalReading"));
        }
    }
}
