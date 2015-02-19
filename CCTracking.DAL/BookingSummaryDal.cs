using System;
using CCTracking.Dto;
using CCTracking.Dto.Response;
using System.Collections.Generic;
using System.Data;


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

            dictionary.Add("@FromBookingDate", searchCriteria.FromBookingDate);
            dictionary.Add("@ToBookingDate", searchCriteria.ToBookingDate);
            dictionary.Add("@CentreId", searchCriteria.CentreId);
            //return "GetAdminBookingReport";
            return "rptCentreReport";
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
        protected override BaseModelResponse ConvertToListGrid(IDataReader dr)
        {
            throw new NotImplementedException();
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
            bookingSummary.AlkhidmatCentre = dr["Centre"].ToString();
            bookingSummary.AlkhidmatCentreId = dr["CentreId"].ToString();
            bookingSummary.BookingAmount = dr["BookingAmount"].ToString();
            bookingSummary.BookingMilage = dr["BookingMilage"].ToString();
            bookingSummary.Receivables = dr["Receivable"].ToString();
            bookingSummary.Bookings = dr["Bookings"].ToString();
            bookingSummary.Maintenance = dr["Maintenance"].ToString();
        }
    }
}
