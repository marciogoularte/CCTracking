using CCTracking.Dto;
using CCTracking.Dto.Response;
using System.Collections.Generic;
using System.Data;

namespace CCTracking.DAL
{
    public class PaymentTypeDal : DBFacade
    {
        protected override string GetByIdSql(int id, Dictionary<string, object> dictionary)
        {
            dictionary.Add("@Id", id);
            return "GetPaymentTypeById";
        }

        protected override string GetAllSql()
        {
            return "GetAllPaymentType";
        }

        protected override string GetByCriteriaSql(BaseModel baseModel, Dictionary<string, object> dictionary)
        {
            PaymentType visitType = baseModel as PaymentType;
            dictionary.Add("@Name", visitType.Name);
            return "GetPaymentTypeByCriteria";
        }

        protected override string ExecuteSql(BaseModel baseModel, Dictionary<string, object> dictionary)
        {
            PaymentType visitType = baseModel as PaymentType;
            dictionary.Add("@Name", visitType.Name);            
            base.ExecuteSql(visitType, dictionary);
            return "dbo.SavePaymentType";
        }

        protected override BaseModelResponse ConvertToModel(IDataReader dr)
        {
            PaymentTypeResponse response = new PaymentTypeResponse();
            PaymentType visitType = null;
            if (dr.Read())
            {
                visitType = new PaymentType();
                MapValues(visitType, dr);
            }
            response.PaymentTypeModel = visitType;
            return response;
        }

        protected override BaseModelResponse ConvertToList(IDataReader dr)
        {
            PaymentTypeResponse response = new PaymentTypeResponse();
            PaymentType visitType = null;
            List<PaymentType> visitTypees = new List<PaymentType>();
            while (dr.Read())
            {
                visitType = new PaymentType();
                MapValues(visitType, dr);
                visitTypees.Add(visitType);
            }
            response.PaymentTypeList = visitTypees;
            return response;
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

        protected override void MapValues(BaseModel baseModel, IDataReader dr)
        {
            base.MapValues(baseModel, dr);
            PaymentType visitType = baseModel as PaymentType;
            if (!dr.IsDBNull(dr.GetOrdinal("Name")))
                visitType.Name = dr.GetString(dr.GetOrdinal("Name"));
        }

        private void MapValuesGrid(PaymentTypeGrid paymentType, IDataReader dr)
        {
            paymentType.Id = dr.GetDataReaderInt32("Id");
            paymentType.Name = dr.GetDataReaderString("Name");
        }

        protected override BaseModelResponse ConvertToListGrid(IDataReader dr)
        {
            PaymentTypeGridResponse response = new PaymentTypeGridResponse();
            PaymentTypeGrid visitType = null;
            List<PaymentTypeGrid> visitTypees = new List<PaymentTypeGrid>();
            while (dr.Read())
            {
                visitType = new PaymentTypeGrid();
                MapValuesGrid(visitType, dr);
                visitTypees.Add(visitType);
            }
            response.PaymentTypeList = visitTypees;
            return response;
        }
    }
}
