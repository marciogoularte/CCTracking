using CCTracking.Dto;
using CCTracking.Dto.Response;
using System;
using System.Collections.Generic;
using System.Data;


namespace CCTracking.DAL
{
    public class BookingDal : DBFacade
    {
        protected override string GetByIdSql(int id, Dictionary<string, object> dictionary)
        {
            dictionary.Add("Id", id);
            return "GetBookingById";
        }
        protected override string GetAllSql()
        {
            return "GetAllBooking";
        }
        protected override string GetByCriteriaSql(BaseModel baseModel, Dictionary<string, object> dictionary)
        {

            SearchCriteria searchCriteria = (SearchCriteria)baseModel;
            var contactInfo = string.IsNullOrEmpty(searchCriteria.ContactInfo) ? null : searchCriteria.ContactInfo;
            var deseasedInfo = string.IsNullOrEmpty(searchCriteria.DeseasedInfo) ? null : searchCriteria.DeseasedInfo;
            //var genderId = searchCriteria.GenderId == 0 ? null : searchCriteria.GenderId;
            dictionary.Add("@ContactInfo", "%" + contactInfo + "%");
            dictionary.Add("@DeseasedInfo", "%" + deseasedInfo + "%");
            dictionary.Add("@GenderId", searchCriteria.GenderId);
            dictionary.Add("@PaymentStatusId", searchCriteria.PaymentStatusId);
            dictionary.Add("@GreveyardId", searchCriteria.GreveyardId);
            dictionary.Add("@CentreId", searchCriteria.CentreId);
            dictionary.Add("@BusId", searchCriteria.BusId);
            return "GetBookingByCriteria";
        }
        protected override string ExecuteSql(BaseModel baseModel, Dictionary<string, object> dictionary)
        {
            Booking booking = (Booking)baseModel;
            //if (booking.Id == null) dictionary.Add("Id", 0);
            //dictionary.Add("Id", booking.Id);
            dictionary.Add("ContactName", booking.ContactName);
            dictionary.Add("ContactMobile", booking.ContactMobile);
            dictionary.Add("ContactNic", booking.ContactNic);
            dictionary.Add("DeseasedName", booking.DeseasedName);
            dictionary.Add("DeseasedAge", booking.DeseasedAge);
            dictionary.Add("DeseasedGender", booking.DeseasedGender);
            dictionary.Add("CauseOfDeath", booking.CauseOfDeath);
            dictionary.Add("Address", booking.Address);
            dictionary.Add("BusPoint", booking.BusPoint);
            dictionary.Add("LandmarkId", booking.LandmarkId);
            dictionary.Add("UnionCouncilId", booking.UnionCouncilId);
            dictionary.Add("TownId", booking.TownId);
            dictionary.Add("PickupDate", booking.PickupDate);
            dictionary.Add("PickupTime", booking.PickupTime);
            dictionary.Add("ReturnTime", booking.ReturnTime);
            dictionary.Add("GraveyardId", booking.GraveyardId);
            dictionary.Add("NamazEJanazaHeldIn", booking.NamazEJanazaHeldIn);
            dictionary.Add("NamazEJanazaLocation", booking.NamazEJanazaLocation);
            dictionary.Add("MasjidName", booking.MasjidName);
            dictionary.Add("IsReferralBooking", booking.IsReferralBooking);
            dictionary.Add("ReferralName", booking.ReferralName);
            dictionary.Add("ReferralDetail", booking.ReferralDetail);
            dictionary.Add("OtherDetail", booking.OtherDetail);
            dictionary.Add("AlkhidmatCentre", booking.AlkhidmatCentreId);
            
            base.ExecuteSql(booking, dictionary);


            //insert/update query and return updated boject
            //return "update Booking set ContactName=@ContactName where Id=@Id";
            return "dbo.SaveBooking";
        }

        protected override BaseModelResponse ConvertToModel(IDataReader dr)
        {
            BookingResponse bookingResponse = new BookingResponse();
            Booking booking = null;
            while (dr.Read())
            {
                booking = new Booking();
                MapValues(booking, dr);
                bookingResponse.BookingModel = booking;
            }
            return bookingResponse;
        }
        protected override BaseModelResponse ConvertToList(IDataReader dr)
        {
            if (IsGridDisplay)
            {
                return ConvertToListGrid(dr);
            }
            else
            {
                return ConvertToSimpleList(dr);
            }
            //BookingResponse bookingResponse = new BookingResponse();
            //List<Booking> bookings = new List<Booking>();
            //Booking booking = null;
            //while (dr.Read())
            //{
            //    booking = new Booking();
                
            //    MapValues(booking, dr);
            //    bookings.Add(booking);
            //}
            //bookingResponse.BookingList = bookings;
            //return bookingResponse;
        }

        protected override BaseModelResponse ConvertToList(DataSet ds)
        {
            return null;
        }

        protected override BaseModelResponse ConvertToListGrid(IDataReader dr)
        {
            BookingGridResponse bookingResponse = new BookingGridResponse();
            List<BookingGrid> bookings = new List<BookingGrid>();
            BookingGrid booking = null;
            while (dr.Read())
            {
                booking = new BookingGrid();
                MapValuesGrid(booking, dr);
                bookings.Add(booking);
            }
            bookingResponse.BookingList = bookings;
            return bookingResponse;
        }

        protected override string DelByIdSql(int id, Dictionary<string, object> dictionary)
        {
            return string.Empty;
        }

        protected override string GetCountSql()
        {
            return string.Empty;
        }

        private BookingResponse ConvertToSimpleList(IDataReader dr)
        {
            BookingResponse bookingResponse = new BookingResponse();
            List<Booking> bookings = new List<Booking>();
            Booking booking = null;
            while (dr.Read())
            {
                booking = new Booking();

                MapValues(booking, dr);
                bookings.Add(booking);
            }
            bookingResponse.BookingList = bookings;
            return bookingResponse;
        }
      
        private void MapValues(Booking booking, IDataReader dr)
        {
            booking.Id = Convert.ToInt32(dr["Id"]);
            if (dr.IsColumnExists("ContactName") && !dr.IsDBNull(dr.GetOrdinal("ContactName")))
                booking.ContactName = dr["ContactName"].ToString();


            if (dr.IsColumnExists("ContactMobile") && !dr.IsDBNull(dr.GetOrdinal("ContactMobile")))
                booking.ContactMobile = dr["ContactMobile"].ToString();
            if (dr.IsColumnExists("ContactNic") && !dr.IsDBNull(dr.GetOrdinal("ContactNic")))
                booking.ContactNic = dr["ContactNic"].ToString();

            if (dr.IsColumnExists("DeseasedName") && !dr.IsDBNull(dr.GetOrdinal("DeseasedName")))
                booking.DeseasedName = dr["DeseasedName"].ToString();
            if (dr.IsColumnExists("DeseasedAge") && !dr.IsDBNull(dr.GetOrdinal("DeseasedAge")))
                booking.DeseasedAge = Convert.ToByte(dr["DeseasedAge"]);
            if (dr.IsColumnExists("DeseasedGender") && !dr.IsDBNull(dr.GetOrdinal("DeseasedGender")))
                booking.DeseasedGender = Convert.ToByte(dr["DeseasedGender"]);
            if (dr.IsColumnExists("CauseOfDeath") && !dr.IsDBNull(dr.GetOrdinal("CauseOfDeath")))
                booking.CauseOfDeath = Convert.ToByte(dr["CauseOfDeath"]);
            if (dr.IsColumnExists("Address") && !dr.IsDBNull(dr.GetOrdinal("Address")))
                booking.Address = dr["Address"].ToString();
            if (dr.IsColumnExists("BusPoint") && !dr.IsDBNull(dr.GetOrdinal("BusPoint")))
                booking.BusPoint = dr["BusPoint"] == DBNull.Value ? 0 : Convert.ToInt32(dr["BusPoint"]);
            if (dr.IsColumnExists("AlkhidmatCentre") && !dr.IsDBNull(dr.GetOrdinal("AlkhidmatCentre")))
                booking.AlkhidmatCentreId = dr["AlkhidmatCentre"] == DBNull.Value ? 0 : Convert.ToInt32(dr["AlkhidmatCentre"]);
            if (dr.IsColumnExists("LandmarkId") && !dr.IsDBNull(dr.GetOrdinal("LandmarkId")))
                booking.LandmarkId = dr["LandmarkId"] == DBNull.Value ? 0 : Convert.ToInt32(dr["LandmarkId"]);
            if (dr.IsColumnExists("UnionCouncilId") && !dr.IsDBNull(dr.GetOrdinal("UnionCouncilId")))
                booking.UnionCouncilId = dr["UnionCouncilId"] == DBNull.Value ? 0 : Convert.ToInt32(dr["UnionCouncilId"]);
            if (dr.IsColumnExists("TownId") && !dr.IsDBNull(dr.GetOrdinal("TownId")))
                booking.TownId = dr["TownId"] == DBNull.Value ? 0 : Convert.ToInt32(dr["TownId"]);
            if (dr.IsColumnExists("PickupDate") && !dr.IsDBNull(dr.GetOrdinal("PickupDate")))
                booking.PickupDate = dr["PickupDate"] == DBNull.Value ? DateTime.MinValue : Convert.ToDateTime(dr["PickupDate"]);
            if (dr.IsColumnExists("PickupTime") && !dr.IsDBNull(dr.GetOrdinal("PickupTime")))
                booking.PickupTime = dr["PickupTime"] == DBNull.Value ? Convert.ToByte(0) : Convert.ToByte(dr["PickupTime"]);
            if (dr.IsColumnExists("ReturnTime") && !dr.IsDBNull(dr.GetOrdinal("ReturnTime")))
                booking.ReturnTime = dr["ReturnTime"] == DBNull.Value ? Convert.ToByte(0) : Convert.ToByte(dr["ReturnTime"]);
            if (dr.IsColumnExists("GraveyardId") && !dr.IsDBNull(dr.GetOrdinal("GraveyardId")))
                booking.GraveyardId = dr["GraveyardId"] == DBNull.Value ? Convert.ToByte(0) : Convert.ToByte(dr["GraveyardId"]);
            if (dr.IsColumnExists("NamazEJanazaHeldIn") && !dr.IsDBNull(dr.GetOrdinal("NamazEJanazaHeldIn")))
                booking.NamazEJanazaHeldIn = dr["NamazEJanazaHeldIn"] == DBNull.Value ? Convert.ToByte(0) : Convert.ToByte(dr["NamazEJanazaHeldIn"]);
            if (dr.IsColumnExists("NamazEJanazaLocation") && !dr.IsDBNull(dr.GetOrdinal("NamazEJanazaLocation")))
                booking.NamazEJanazaLocation = dr["NamazEJanazaLocation"] == DBNull.Value ? "" : dr["NamazEJanazaLocation"].ToString();
            if (dr.IsColumnExists("MasjidName") && !dr.IsDBNull(dr.GetOrdinal("MasjidName")))
                booking.MasjidName = dr["MasjidName"] == DBNull.Value ? "" : dr["MasjidName"].ToString();
            if (dr.IsColumnExists("OtherDetail") && !dr.IsDBNull(dr.GetOrdinal("OtherDetail")))
                booking.OtherDetail = dr["OtherDetail"].ToString();
            if (dr.IsColumnExists("IsReferralBooking") && !dr.IsDBNull(dr.GetOrdinal("IsReferralBooking")))
                booking.IsReferralBooking = dr["IsReferralBooking"] == DBNull.Value ? false : Convert.ToBoolean(dr["IsReferralBooking"]);
            if (dr.IsColumnExists("ReferralName") && !dr.IsDBNull(dr.GetOrdinal("ReferralName")))
                booking.ReferralName = dr["ReferralName"] == DBNull.Value ? "" : dr["ReferralName"].ToString();
            if (dr.IsColumnExists("ReferralDetail") && !dr.IsDBNull(dr.GetOrdinal("ReferralDetail")))
                booking.ReferralDetail = dr["ReferralDetail"] == DBNull.Value ? "" : dr["ReferralDetail"].ToString();

        }
        
        private void MapValuesGrid(BookingGrid booking, IDataReader dr)
        {
            booking.Id = Convert.ToInt32(dr["Id"]);
            if (dr.IsColumnExists("ContactName") && !dr.IsDBNull(dr.GetOrdinal("ContactName")))
                booking.ContactName = dr["ContactName"].ToString();
            if (dr.IsColumnExists("ContactMobile") && !dr.IsDBNull(dr.GetOrdinal("ContactMobile")))
                booking.ContactMobile = dr["ContactMobile"].ToString();
            //if (dr.IsColumnExists("ContactNic") && !dr.IsDBNull(dr.GetOrdinal("ContactNic")))
            //    booking.ContactNic = dr["ContactNic"].ToString();
            if (dr.IsColumnExists("ReceiptNo") && !dr.IsDBNull(dr.GetOrdinal("ReceiptNo")))
                booking.ReceiptNo = dr["ReceiptNo"].ToString();
            if (dr.IsColumnExists("DeseasedName") && !dr.IsDBNull(dr.GetOrdinal("DeseasedName")))
                booking.DeseasedName = dr["DeseasedName"].ToString();
            if (dr.IsColumnExists("PickupDate") && !dr.IsDBNull(dr.GetOrdinal("PickupDate")))
                booking.PickupDate = dr["PickupDate"] == DBNull.Value ? DateTime.MinValue : Convert.ToDateTime(dr["PickupDate"]);
            if (dr.IsColumnExists("Status") && !dr.IsDBNull(dr.GetOrdinal("Status")))
                booking.Status = Convert.ToBoolean(dr["Status"]);

        }
        
    }
}
