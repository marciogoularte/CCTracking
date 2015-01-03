using System.Collections.Generic;

namespace CCTracking.Dto.Response
{
    public class UnionCouncilResponse : BaseModelResponse
    {
        public UnionCouncil UnionCouncilModel { get; set; }
        public List<UnionCouncil> UnionCouncilList { get; set; }
    }
}
