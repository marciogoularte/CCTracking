using System;
using System.Collections.Generic;
using System.Data;
using CCTracking.Dto;
using CCTracking.Dto.Response;

namespace CCTracking.DAL
{
    public class HomeDal : DBFacade
    {

        protected override BaseModelResponse ConvertToModel(IDataReader dr)
        {
            HomeResponse response = new HomeResponse();
            Home home = null;
            if (dr.Read())
            {
                home = new Home();
                MapValues(home, dr);
            }
            response.HomeModel = home;
            return response;
        }

        protected override BaseModelResponse ConvertToList(IDataReader dr)
        {
            HomeResponse response = new HomeResponse();
            Home home = null;
            List<Home> homes = new List<Home>();
            while (dr.Read())
            {
                home = new Home();
                MapValues(home, dr);
                homes.Add(home);
            }
            response.HomeList = homes;
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
            Home home = baseModel as Home;
            dictionary.Add("@FromBookingDate", home.FromDate);
            dictionary.Add("@ToBookingDate", home.ToDate);
            return "rptDashboardBookingSummary";
        }
        protected override void MapValues(BaseModel baseModel, IDataReader dr)
        {
            //base.MapValues(baseModel, dr);
            Home home = baseModel as Home;

            home.CentreId = dr.GetInt32(dr.GetOrdinal("CentreId"));
            if (!dr.IsDBNull(dr.GetOrdinal("Centre")))
                home.CentreDesc = dr.GetString(dr.GetOrdinal("Centre"));
            if (!dr.IsDBNull(dr.GetOrdinal("BookingAmount")))
                home.BookingAmount = dr.GetDecimal(dr.GetOrdinal("BookingAmount"));
            if (!dr.IsDBNull(dr.GetOrdinal("BookingMilage")))
                home.BookingMilage = dr.GetInt64(dr.GetOrdinal("BookingMilage"));
            if (!dr.IsDBNull(dr.GetOrdinal("Bookings")))
                home.TotalBooking = dr.GetInt32(dr.GetOrdinal("Bookings"));
            if (!dr.IsDBNull(dr.GetOrdinal("Receivable")))
                home.Receivable = dr.GetDecimal(dr.GetOrdinal("Receivable"));
            if (!dr.IsDBNull(dr.GetOrdinal("Maintenance")))
                home.Maintenance = dr.GetDecimal(dr.GetOrdinal("Maintenance"));
            if (!dr.IsDBNull(dr.GetOrdinal("Profit")))
                home.Profit = dr.GetDecimal(dr.GetOrdinal("Profit"));
        }
    }
}
