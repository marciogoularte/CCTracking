﻿using CCTracking.Api.App_Start;
using CCTracking.DAL;
using CCTracking.Dto.Response;
using System;
using System.Web.Http;

namespace CCTracking.Api.Controllers
{
    [BasicHttpAuthorize]
    public class UnionCouncilController : ApiController
    {        
        static int rowCounter = 1;

        [HttpPost]
        public CCTracking.Dto.UnionCouncil SaveUnionCouncil(CCTracking.Dto.UnionCouncil unionCouncil)
        {
            if (unionCouncil != null)
            {
                //booking.Id = rowCounter++;
                DBFacade facade = new UnionCouncilDal();
                if (unionCouncil.Id <= 0)
                {
                    unionCouncil.CreatedDate = unionCouncil.ModifiedDate = DateTime.Today;
                    unionCouncil.CreatedBy = unionCouncil.ModifiedBy;
                }
                else
                {
                    unionCouncil.ModifiedDate = DateTime.Today;
                }
                BaseModelResponse centreResponse = facade.Execute(unionCouncil);
                //var a = facade.Execute(booking);
                unionCouncil = ((UnionCouncilResponse)centreResponse).UnionCouncilModel;
                //bookings.Add(booking);
            }
            return unionCouncil;
        }

        [HttpGet]
        public LookupResponse UnionCouncilDefault()
        {
            DBFacade facade = new LookupDal();
            BaseModelResponse baseModelResponse = facade.ExecuteDs(null);
            LookupResponse lookupResponse = (LookupResponse)baseModelResponse;
            return lookupResponse;
        }

        [HttpGet]
        public UnionCouncilGridResponse GetAll(string a)
        {
            DBFacade facade = new UnionCouncilDal();
            BaseModelResponse baseModelResponse = facade.GetAllGrid();
            UnionCouncilGridResponse unionCouncilResponse = (UnionCouncilGridResponse)baseModelResponse;
            return unionCouncilResponse;
        }
        
        [HttpGet]
        public UnionCouncilResponse GetById(int id)
        {
            DBFacade facade = new UnionCouncilDal();
            BaseModelResponse baseModelResponse = facade.GetById(id);
            UnionCouncilResponse unionCouncilResponse = (UnionCouncilResponse)baseModelResponse;
            return unionCouncilResponse;
        }
    }
}
