using System.Collections.Generic;

namespace CCTracking.Dto.Response
{
    public class CauseofDeathResponse : BaseModelResponse
    {
        public CauseofDeath CauseofDeathModel { get; set; }
        public List<CauseofDeath> CauseofDeathList { get; set; }
    }

    public class CauseofDeathGridResponse : BaseModelResponse
    {
        public List<CauseofDeathGrid> CauseofDeathList { get; set; }
    }
}
