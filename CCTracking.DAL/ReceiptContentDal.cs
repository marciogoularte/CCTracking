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
            receiptContent.PrintDateTime = DateTime.Now;
        }

        protected override BaseModelResponse ConvertToListGrid(IDataReader dr)
        {
            throw new NotImplementedException();
        }
    }
}
