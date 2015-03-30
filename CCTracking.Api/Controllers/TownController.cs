﻿using CCTracking.Api.App_Start;
using CCTracking.DAL;
using CCTracking.Dto.Response;
using System;
using System.Web.Http;

namespace CCTracking.Api.Controllers
{
    [BasicHttpAuthorize]
    public class TownController : ApiController
    {        
        static int rowCounter = 1;

        [HttpPost]
        public CCTracking.Dto.Town SaveTown(CCTracking.Dto.Town town)
        {
            if (town != null)
            {
                DBFacade facade = new TownDal();
                if (town.Id <= 0)
                {
                    town.CreatedDate = town.ModifiedDate = DateTime.Today;
                    town.CreatedBy = town.ModifiedBy;
                }
                else
                {
                    town.ModifiedDate = DateTime.Today;
                }
                BaseModelResponse centreResponse = facade.Execute(town);
                town = ((TownResponse)centreResponse).TownModel;
            }
            return town;
        }

        [HttpGet]
        public LookupResponse TownDefault()
        {
            DBFacade facade = new LookupDal();
            BaseModelResponse baseModelResponse = facade.ExecuteDs(null);
            LookupResponse lookupResponse = (LookupResponse)baseModelResponse;
            return lookupResponse;
        }

        [HttpGet]
        public TownGridResponse GetAll(string a)
        {
            DBFacade facade = new TownDal();
            BaseModelResponse baseModelResponse = facade.GetAllGrid();
            TownGridResponse townResponse = (TownGridResponse)baseModelResponse;
            return townResponse;
        }
        
        [HttpGet]
        public TownResponse GetById(int id)
        {
            DBFacade facade = new TownDal();
            BaseModelResponse baseModelResponse = facade.GetById(id);
            TownResponse townResponse = (TownResponse)baseModelResponse;
            return townResponse;
        }
    }
}
