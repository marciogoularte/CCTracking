using System.Collections.Generic;
using CCTracking.Dto.Audit;

namespace CCTracking.Dto.Response
{
    public class BusVisitResponse : BaseModelResponse
    {
        public BusVisit BusVisitModel { get; set; }
        public List<BusVisit> BusVisitList { get; set; }
        public List<AuditDisplay> AuditBusVisitDisplayList { get; set; }
        public List<AuditBusVisit> AuditBusVisitList { get; set; }
    }
}
