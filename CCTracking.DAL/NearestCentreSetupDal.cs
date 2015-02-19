using CCTracking.Dto;
using CCTracking.Dto.Response;
using System.Collections.Generic;
using System.Data;

namespace CCTracking.DAL
{
    public class NearestCentreSetupDal : DBFacade
    {
        private string mapMethod = string.Empty;
        public NearestCentreSetupDal()
        {
            
        }
        protected override string GetByIdSql(int id, Dictionary<string, object> dictionary)
        {
            //provide busId
            dictionary.Add("@Id", id);
            return "GetNearestCentreSetupById";
        }

        protected override string GetAllSql()
        {
            return "GetAllNearestCentreSetup";
        }

        protected override string GetByCriteriaSql(BaseModel baseModel, Dictionary<string, object> dictionary)
        {
            
            return "";
        }

        protected override string ExecuteSql(BaseModel baseModel, Dictionary<string, object> dictionary) 
        {
            NearestCentre nearestCentre = baseModel as NearestCentre;
            dictionary.Add("@CentreId", nearestCentre.CentreId);
            dictionary.Add("@NearestCentreId", nearestCentre.NearestCentreId);
            dictionary.Add("@NearestLevel", nearestCentre.NearestLevel);
            base.ExecuteSql(nearestCentre, dictionary);
            return "dbo.SaveNearestCentreSetup";
        }

        protected override BaseModelResponse ConvertToModel(IDataReader dr)
        {
            NearestCentreResponse response = new NearestCentreResponse();
            NearestCentre nearestCentre = null;
            if (dr.Read())
            {
                nearestCentre = new NearestCentre();
                MapValues(nearestCentre, dr);
            }
            response.NearestCentreModel = nearestCentre;
            return response;
        }

        protected override BaseModelResponse ConvertToList(IDataReader dr)
        {
            NearestCentreResponse response = new NearestCentreResponse();
            NearestCentre nearestCentre = null;
            List<NearestCentre> nearestCentres = new List<NearestCentre>();
            while (dr.Read())
            {
                nearestCentre = new NearestCentre();
                MapValues(nearestCentre, dr);
                nearestCentres.Add(nearestCentre);
            }
            response.NearestCentreList = nearestCentres;
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
            NearestCentre nearestCentre = baseModel as NearestCentre;
            base.MapValues(nearestCentre, dr);
            if (!dr.IsDBNull(dr.GetOrdinal("CentreId")))
                nearestCentre.CentreId = dr.GetInt32(dr.GetOrdinal("CentreId"));
            if (!dr.IsDBNull(dr.GetOrdinal("CentreName")))
                nearestCentre.CentreName = dr.GetString(dr.GetOrdinal("CentreName"));
            if (!dr.IsDBNull(dr.GetOrdinal("NearestCentreId")))
                nearestCentre.NearestCentreId = dr.GetInt32(dr.GetOrdinal("NearestCentreId"));
            if (!dr.IsDBNull(dr.GetOrdinal("NearestCentreName")))
                nearestCentre.NearestCentreName = dr.GetString(dr.GetOrdinal("NearestCentreName"));
            if (!dr.IsDBNull(dr.GetOrdinal("NearestLevel")))
                nearestCentre.NearestLevel = dr.GetInt32(dr.GetOrdinal("NearestLevel"));
        }

        protected override BaseModelResponse ConvertToListGrid(IDataReader dr)
        {
            throw new System.NotImplementedException();
        }
    }
}
