using CCTracking.Dto;
using CCTracking.Dto.Response;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;


namespace CCTracking.DAL
{
    public class BookingSummaryDal : DBFacade
    {
        protected override string GetByIdSql(int id, Dictionary<string, object> dictionary)
        {
            
            return "";
        }

        protected override string GetAllSql()
        {
            return "";
        }

        protected override string GetByCriteriaSql(BaseModel baseModel, Dictionary<string, object> dictionary)
        {
            SearchCriteria searchCriteria = (SearchCriteria)baseModel;
            var contactInfo = string.IsNullOrEmpty(searchCriteria.ContactInfo) ? null : searchCriteria.ContactInfo;
            var deseasedInfo = string.IsNullOrEmpty(searchCriteria.DeseasedInfo) ? null : searchCriteria.DeseasedInfo;
            dictionary.Add("@ContactInfo", "%" + contactInfo + "%");
            dictionary.Add("@DeseasedInfo", "%" + deseasedInfo + "%");
            dictionary.Add("@GenderId", searchCriteria.GenderId);
            dictionary.Add("@PaymentStatusId", searchCriteria.PaymentStatusId);
            dictionary.Add("@GreveyardId", searchCriteria.GreveyardId);
            dictionary.Add("@CentreId", searchCriteria.CentreId);
            dictionary.Add("@BusId", searchCriteria.BusId);
            return "GetAdminBookingReport";
        }

        protected override string ExecuteSql(BaseModel baseModel, Dictionary<string, object> dictionary)
        {
           return "";
        }

        protected override BaseModelResponse ConvertToModel(IDataReader dr)
        {
            BookingSummaryResponse bookingSummaryResponse = new BookingSummaryResponse();
            BookingSummary bookingSummary = null;
            while (dr.Read())
            {
                bookingSummary = new BookingSummary();
                MapValues(bookingSummary, dr);
                bookingSummaryResponse.BookingSummaryModel = bookingSummary;
            }
            return bookingSummaryResponse;
        }

        protected override BaseModelResponse ConvertToList(IDataReader dr)
        {
            BookingSummaryResponse bookingSummaryResponse = new BookingSummaryResponse();
            List<BookingSummary> bookingSummarys = new List<BookingSummary>();
            BookingSummary bookingSummary = null;
            while (dr.Read())
            {
                bookingSummary = new BookingSummary();
                MapValues(bookingSummary, dr);
                bookingSummarys.Add(bookingSummary);
            }
            bookingSummaryResponse.BookingSummaryList = bookingSummarys;
            return bookingSummaryResponse;
        }

        protected override BaseModelResponse ConvertToList(DataSet ds)
        {
            return null;
        }

        protected override string DelByIdSql(int id, Dictionary<string, object> dictionary)
        {
            return string.Empty;
        }

        protected override string GetCountSql()
        {
            return string.Empty;
        }

        private void MapValues(BookingSummary bookingSummary, IDataReader dr)
        {
            bookingSummary.Alkhidmatentre = dr["Alkhidmatentre"].ToString();
            bookingSummary.TodaysBooking = Convert.ToInt32(dr["TodaysBooking"]);
            bookingSummary.UserPiadBooking = Convert.ToInt32(dr["UserPiadBooking"]);
            bookingSummary.UserUnpaidBooking = Convert.ToInt32(dr["UserUnpaidBooking"]);
            bookingSummary.UserTotalBooking = Convert.ToInt32(dr["UserTotalBooking"]);
        }
    }
}
