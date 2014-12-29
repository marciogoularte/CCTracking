using System;
using System.Collections.Generic;
using System.Data;
using CCTracking.Dto;
using CCTracking.Dto.Response;

namespace CCTracking.DAL
{
    public class ExtraChargesDal : DBFacade
    {
        protected override BaseModelResponse ConvertToModel(IDataReader dr)
        {
            ExtraChargesResponse response = new ExtraChargesResponse();
            ExtraCharges charges = null;
            if (dr.Read())
            {
                charges=new ExtraCharges();
                MapValues(charges, dr);
            }
            response.ExtraChargesModel = charges;
            return response;
        }

        protected override BaseModelResponse ConvertToList(IDataReader dr)
        {
            ExtraChargesResponse response = new ExtraChargesResponse();
            ExtraCharges  charges = null;
            List<ExtraCharges> chargesList = new List<ExtraCharges>();
            while (dr.Read())
            {
                charges = new ExtraCharges();
                MapValues(charges, dr);
                chargesList.Add(charges);
            }
            response.ExtraChargesList = chargesList;
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
            ExtraCharges charges = (ExtraCharges) baseModel;
            dictionary.Add("@BookingId", charges.BookingId);
            return "GetExtraChargesByBookingId";
        }

        protected override string ExecuteSql(BaseModel baseModel, Dictionary<string, object> dictionary)
        {
            ExtraCharges extraCharges = baseModel as ExtraCharges;
            dictionary.Add("@BusId", extraCharges.BusId);
            dictionary.Add("@BookingId", extraCharges.BookingId);
            dictionary.Add("@ExtraAmountCharge", extraCharges.ExtraAmountCharge);
            dictionary.Add("@ExtraAmountReason", extraCharges.ExtraAmountReason);
            dictionary.Add("@ExtraAmountReceipt", extraCharges.ExtraAmountReceipt);
            base.ExecuteSql(extraCharges, dictionary);
            return "dbo.SaveExtraCharges";
        }

        protected virtual void MapValues(BaseModel baseModel, IDataReader dr)
        {
            base.MapValues(baseModel, dr);
            ExtraCharges charges = baseModel as ExtraCharges;
            charges.BookingId = dr.GetInt32(dr.GetOrdinal("BookingId"));
            if (!dr.IsDBNull(dr.GetOrdinal("BusId")))
                charges.BusId = dr.GetInt32(dr.GetOrdinal("BusId"));
            if (!dr.IsDBNull(dr.GetOrdinal("ExtraAmountCharge")))
                charges.ExtraAmountCharge = dr.GetDecimal(dr.GetOrdinal("ExtraAmountCharge"));
            if (!dr.IsDBNull(dr.GetOrdinal("ExtraAmountReason")))
                charges.ExtraAmountReason = dr.GetString(dr.GetOrdinal("ExtraAmountReason"));
            if (!dr.IsDBNull(dr.GetOrdinal("ExtraAmountReceipt")))
                charges.ExtraAmountReceipt = dr.GetString(dr.GetOrdinal("ExtraAmountReceipt"));
            if (!dr.IsDBNull(dr.GetOrdinal("BookingAmount")))
                charges.ActualBookingAmount = dr.GetDecimal(dr.GetOrdinal("BookingAmount"));
        }
    }
}
