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
    public class NearestCentreDal : DBFacade
    {
        protected override string GetByIdSql(int id, Dictionary<string, object> dictionary)
        {
            dictionary.Add("@Id", id);
            return "GetNearestCentreById";
        }

        protected override string GetAllSql()
        {
            return "GetAllNearestCentre";
        }

        protected override string GetByCriteriaSql(BaseModel baseModel, Dictionary<string, object> dictionary)
        {
            NearestAlkhidmatCentre nearestCentre = baseModel as NearestAlkhidmatCentre;
            dictionary.Add("@CentreId", nearestCentre.CentreId);
            return "GetNearestCentreByCriteria";
        }

        protected override string ExecuteSql(BaseModel baseModel, Dictionary<string, object> dictionary) 
        {
            NearestAlkhidmatCentre nearestCentre = baseModel as NearestAlkhidmatCentre;
            dictionary.Add("@CentreId", nearestCentre.CentreId);
            dictionary.Add("@NearestCentreId", nearestCentre.NearestCentreId);
            dictionary.Add("@NearestLevel", nearestCentre.NearestLevel);
            base.ExecuteSql(nearestCentre, dictionary);
            return "dbo.SaveNearestCentre";
        }

        protected override BaseModelResponse ConvertToModel(IDataReader dr)
        {
            NearestCentreResponse response = new NearestCentreResponse();
            NearestAlkhidmatCentre nearestCentre = null;
            if (dr.Read())
            {
                nearestCentre = new NearestAlkhidmatCentre();
                MapValues(nearestCentre, dr);
            }
            response.NearestCentreModel = nearestCentre;
            return response;
        }

        protected override BaseModelResponse ConvertToList(IDataReader dr)
        {
            NearestCentreResponse response = new NearestCentreResponse();
            NearestAlkhidmatCentre nearestCentre = null;
            List<NearestAlkhidmatCentre> nearestCentres = new List<NearestAlkhidmatCentre>();
            while (dr.Read())
            {
                nearestCentre = new NearestAlkhidmatCentre();
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
            base.MapValues(baseModel, dr);
            NearestAlkhidmatCentre nearestCentre = baseModel as NearestAlkhidmatCentre;

            if (!dr.IsDBNull(dr.GetOrdinal("CentreId")))
                nearestCentre.CentreId = dr.GetInt32(dr.GetOrdinal("CentreId"));
            if (!dr.IsDBNull(dr.GetOrdinal("NearestCentreId")))
                nearestCentre.NearestCentreId = dr.GetInt32(dr.GetOrdinal("NearestCentreId"));
            if (!dr.IsDBNull(dr.GetOrdinal("NearestLevel")))
                nearestCentre.NearestLevel = dr.GetByte(dr.GetOrdinal("NearestLevel"));
        }
    }
}
