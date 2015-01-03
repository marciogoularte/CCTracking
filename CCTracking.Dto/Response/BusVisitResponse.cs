using System.Collections.Generic;

namespace CCTracking.Dto.Response
{
    public class BusVisitResponse : BaseModelResponse
    {
        public BusVisit BusVisitModel { get; set; }
        public List<BusVisit> BusVisitList { get; set; }
    }
}
