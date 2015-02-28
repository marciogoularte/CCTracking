using CCTracking.Dto;
using CCTracking.Dto.Response;
using System.Collections.Generic;
using System.Data;

namespace CCTracking.DAL
{
    public class CauseofDeathDal : DBFacade
    {
        protected override string GetByIdSql(int id, Dictionary<string, object> dictionary)
        {
            dictionary.Add("@Id", id);
            return "GetCauseofDeathById";
        }

        protected override string GetAllSql()
        {
            return "GetAllCauseofDeath";
        }

        protected override string GetByCriteriaSql(BaseModel baseModel, Dictionary<string, object> dictionary)
        {
            CauseofDeath causeofDeath = baseModel as CauseofDeath;
            dictionary.Add("@Name", causeofDeath.Name);
            return "GetCauseofDeathByCriteria";
        }

        protected override string ExecuteSql(BaseModel baseModel, Dictionary<string, object> dictionary) 
        {
            CauseofDeath causeofDeath = baseModel as CauseofDeath;
            dictionary.Add("@Name", causeofDeath.Name);
            base.ExecuteSql(causeofDeath, dictionary);
            return "dbo.SaveCauseofDeath";
        }

        protected override BaseModelResponse ConvertToModel(IDataReader dr)
        {
            CauseofDeathResponse response = new CauseofDeathResponse();
            CauseofDeath causeofDeath = null;
            if (dr.Read())
            {
                causeofDeath = new CauseofDeath();
                MapValues(causeofDeath, dr);
            }
            response.CauseofDeathModel = causeofDeath;
            return response;
        }

        protected override BaseModelResponse ConvertToList(IDataReader dr)
        {
            CauseofDeathResponse response = new CauseofDeathResponse();
            CauseofDeath causeofDeath = null;
            List<CauseofDeath> causeofDeathes = new List<CauseofDeath>();
            while (dr.Read())
            {
                causeofDeath = new CauseofDeath();
                MapValues(causeofDeath, dr);
                causeofDeathes.Add(causeofDeath);
            }
            response.CauseofDeathList = causeofDeathes;
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
            CauseofDeath causeofDeath = baseModel as CauseofDeath;

            if (!dr.IsDBNull(dr.GetOrdinal("Name")))
                causeofDeath.Name = dr.GetString(dr.GetOrdinal("Name"));
        }

        protected override BaseModelResponse ConvertToListGrid(IDataReader dr)
        {
            CauseofDeathGridResponse response = new CauseofDeathGridResponse();
            List<CauseofDeathGrid> items = new List<CauseofDeathGrid>();
            CauseofDeathGrid item = null;
            while (dr.Read())
            {
                item = new CauseofDeathGrid();
                MapValuesGrid(item, dr);
                items.Add(item);
            }
            response.CauseofDeathList = items;
            return response;
        }

        private void MapValuesGrid(CauseofDeathGrid item, IDataReader dr)
        {
            item.Id = dr.GetDataReaderInt32("Id");
            item.Name = dr.GetDataReaderString("Name");
        }
    }
}
