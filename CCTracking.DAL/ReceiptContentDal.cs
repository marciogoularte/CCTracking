using System;
using System.Collections.Generic;
using System.Data;
using CCTracking.Dto;
using CCTracking.Dto.Response;

namespace CCTracking.DAL
{
    public class ReceiptContentDal : DBFacade
    {

        protected override BaseModelResponse ConvertToModel(IDataReader dr)
        {
            ReceiptContentResponse response = new ReceiptContentResponse();
            ReceiptContent receiptContent = null;
            if (dr.Read())
            {
                receiptContent = new ReceiptContent();
                MapValues(receiptContent, dr);
            }
            response.ReceiptContentModel = receiptContent;
            return response;
        }

        protected override BaseModelResponse ConvertToList(IDataReader dr)
        {
            throw new NotImplementedException();
        }

        protected override BaseModelResponse ConvertToList(DataSet ds)
        {
            throw new NotImplementedException();
        }

        protected override string GetByIdSql(int id, Dictionary<string, object> dictionary)
        {
            dictionary.Add("@BookingId", id);
            return "GetRceiptContentById";
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
            throw new NotImplementedException();
        }
        protected override void MapValues(BaseModel baseModel, IDataReader dr)
        {
            //base.MapValues(baseModel, dr);
            ReceiptContent receiptContent = baseModel as ReceiptContent;
            if (!dr.IsDBNull(dr.GetOrdinal("BookingId")))
                receiptContent.BookingId = dr.GetInt32(dr.GetOrdinal("BookingId"));
            if (!dr.IsDBNull(dr.GetOrdinal("ContactName")))
                receiptContent.ContactName = dr.GetString(dr.GetOrdinal("ContactName"));
            if (!dr.IsDBNull(dr.GetOrdinal("ContactMobile")))
                receiptContent.ContactMobile = dr.GetString(dr.GetOrdinal("ContactMobile"));
            if (!dr.IsDBNull(dr.GetOrdinal("ContactCnic")))
                receiptContent.ContactCnic = dr.GetString(dr.GetOrdinal("ContactCnic"));
            if (!dr.IsDBNull(dr.GetOrdinal("DeseasedName")))
                receiptContent.DeseasedName = dr.GetString(dr.GetOrdinal("DeseasedName"));
            if (!dr.IsDBNull(dr.GetOrdinal("DeseasedAge")))
                receiptContent.DeseasedAge = dr.GetInt16(dr.GetOrdinal("DeseasedAge"));
            if (!dr.IsDBNull(dr.GetOrdinal("Address")))
                receiptContent.Address = dr.GetString(dr.GetOrdinal("Address"));
            if (!dr.IsDBNull(dr.GetOrdinal("BusPoint")))
                receiptContent.BusPoint = dr.GetString(dr.GetOrdinal("BusPoint"));
            if (!dr.IsDBNull(dr.GetOrdinal("PickupTime")))
                receiptContent.PickupTime = dr.GetString(dr.GetOrdinal("PickupTime"));
            if (!dr.IsDBNull(dr.GetOrdinal("DriverName")))
                receiptContent.DriverName = dr.GetString(dr.GetOrdinal("DriverName"));
            if (!dr.IsDBNull(dr.GetOrdinal("DriverContact")))
                receiptContent.DriverContact = dr.GetString(dr.GetOrdinal("DriverContact"));
            if (!dr.IsDBNull(dr.GetOrdinal("ReferralDetail")))
                receiptContent.ReferralDetail = dr.GetString(dr.GetOrdinal("ReferralDetail"));
            if (!dr.IsDBNull(dr.GetOrdinal("Bookingcentre")))
                receiptContent.BookingCentre = dr.GetString(dr.GetOrdinal("Bookingcentre"));
            if (!dr.IsDBNull(dr.GetOrdinal("BookingReceipt")))
                receiptContent.BookingReceipt = dr.GetString(dr.GetOrdinal("BookingReceipt"));
            if (!dr.IsDBNull(dr.GetOrdinal("BookingDate")))
                receiptContent.BookingDate = dr.GetDateTime(dr.GetOrdinal("BookingDate"));
            if (!dr.IsDBNull(dr.GetOrdinal("FuelAmount")))
                receiptContent.BookingAmount = dr.GetDecimal(dr.GetOrdinal("FuelAmount"));
            //if (!dr.IsDBNull(dr.GetOrdinal("UserName")))
            //    receiptContent.UserName = dr.GetString(dr.GetOrdinal("UserName"));
            if (!dr.IsDBNull(dr.GetOrdinal("CentreDesc")))
                receiptContent.CentreDesc = dr.GetString(dr.GetOrdinal("CentreDesc"));
            if (!dr.IsDBNull(dr.GetOrdinal("CauseOfDeath")))
                receiptContent.CauseOfDeath = dr.GetString(dr.GetOrdinal("CauseOfDeath"));
            if (!dr.IsDBNull(dr.GetOrdinal("Graveyard")))
                receiptContent.Graveyard = dr.GetString(dr.GetOrdinal("Graveyard"));
            if (!dr.IsDBNull(dr.GetOrdinal("NamazEJanazaHeldIn")))
                receiptContent.NamazEJanazaHeldIn = dr.GetString(dr.GetOrdinal("NamazEJanazaHeldIn"));
            if (ColumnExists(dr, "InitialReading"))
                receiptContent.InitialReading = dr["InitialReading"].ToString();
            if (ColumnExists(dr,"FinalReading"))
                receiptContent.FinalReading = dr["FinalReading"].ToString();
            if (ColumnExists(dr, "FinalReading"))
                receiptContent.FinalReading = dr["FinalReading"].ToString();
            if (ColumnExists(dr, "ReferralName"))
                receiptContent.ReferralName = dr["ReferralName"].ToString();
            if (ColumnExists(dr, "OtherDetail"))
                receiptContent.OtherDetail = dr["OtherDetail"].ToString();
            if (ColumnExists(dr, "NamazEJanazaLocation"))
                receiptContent.NamazEJanazaLocation = dr["NamazEJanazaLocation"].ToString();
            receiptContent.PrintDateTime = DateTime.Now;
        }

        protected override BaseModelResponse ConvertToListGrid(IDataReader dr)
        {
            throw new NotImplementedException();
        }
    }
}
