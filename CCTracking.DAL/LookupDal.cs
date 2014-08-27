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
    public class LookupDal : DBFacade
    {
        protected override string GetByIdSql(int id, Dictionary<string, object> dictionary)
        {
            return "";
        }
        protected override string GetAllSql()
        {
            return "select * from Booking";
        }
        protected override string GetByCriteriaSql(BaseModel baseModel, Dictionary<string, object> dictionary)
        {            
            return "";
        }
        protected override string ExecuteSql(BaseModel baseModel, Dictionary<string, object> dictionary)
        {
            return "dbo.Lookup";
        }

        protected override BaseModelResponse ConvertToModel(IDataReader dr)
        {
            return null;
        }
        protected override BaseModelResponse ConvertToList(IDataReader dr)
        {
            return null;
        }
        protected override BaseModelResponse ConvertToList(DataSet ds)
        {
            LookupResponse lookupResponse = new LookupResponse();
            List<Lookup> causeOfDeath = new List<Lookup>();
            List<Lookup> town = new List<Lookup>();
            List<Lookup> unionCouncil = new List<Lookup>();
            List<Lookup> landmark = new List<Lookup>();
            List<Lookup> graveyard = new List<Lookup>();
            List<Lookup> bus = new List<Lookup>();
            List<Lookup> alkhidmatCentre = new List<Lookup>();
            List<Lookup> driver = new List<Lookup>();
            List<Lookup> cashier = new List<Lookup>();
            List<Lookup> paymentType = new List<Lookup>();


            Lookup lookup = null;
            if (ds != null && ds.Tables.Count > 0)
            {
                foreach (DataRow item in ds.Tables[0].Rows)
                {
                    causeOfDeath.Add(new Lookup { Id = Convert.ToInt32(item["id"]), Description = item["description"].ToString() });
                }
                foreach (DataRow item in ds.Tables[1].Rows)
                {
                    town.Add(new Lookup { Id = Convert.ToInt32(item["id"]), Description = item["description"].ToString() });
                }
                foreach (DataRow item in ds.Tables[2].Rows)
                {
                    unionCouncil.Add(new Lookup { Id = Convert.ToInt32(item["id"]), Description = item["description"].ToString() });
                }
                foreach (DataRow item in ds.Tables[3].Rows)
                {
                    landmark.Add(new Lookup { Id = Convert.ToInt32(item["id"]), Description = item["description"].ToString() });
                }
                foreach (DataRow item in ds.Tables[4].Rows)
                {
                    graveyard.Add(new Lookup { Id = Convert.ToInt32(item["id"]), Description = item["description"].ToString() });
                }
                foreach (DataRow item in ds.Tables[5].Rows)
                {
                    bus.Add(new Lookup { Id = Convert.ToInt32(item["id"]), Description = item["description"].ToString() });
                }
                foreach (DataRow item in ds.Tables[6].Rows)
                {
                    driver.Add(new Lookup { Id = Convert.ToInt32(item["id"]), Description = item["description"].ToString() });
                }
                foreach (DataRow item in ds.Tables[7].Rows)
                {
                    alkhidmatCentre.Add(new Lookup { Id = Convert.ToInt32(item["id"]), Description = item["description"].ToString() });
                }
                foreach (DataRow item in ds.Tables[8].Rows)
                {
                    cashier.Add(new Lookup { Id = Convert.ToInt32(item["id"]), Description = item["description"].ToString() });
                }
                foreach (DataRow item in ds.Tables[9].Rows)
                {
                    paymentType.Add(new Lookup { Id = Convert.ToInt32(item["id"]), Description = item["description"].ToString() });
                }
                lookupResponse.CauseOfDeath = causeOfDeath;
                lookupResponse.Town = town;
                lookupResponse.UnionCouncil = unionCouncil;
                lookupResponse.Landmark = landmark;
                lookupResponse.Graveyard = graveyard;
                lookupResponse.Bus = bus;
                lookupResponse.Driver = driver;
                lookupResponse.AlkhidmatCentre = alkhidmatCentre;
                lookupResponse.Cashier = cashier;
                lookupResponse.PaymentType = paymentType;

            }
            return lookupResponse;
        }
        
    }
}
