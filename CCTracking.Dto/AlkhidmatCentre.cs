namespace CCTracking.Dto
{
    public class AlkhidmatCentre : BaseModel
    {
        public string Name { get; set; }
        public string   Address  { get; set; }
        public string ContactNo1 { get; set; }
        public string ContactNo2 { get; set; }
        public int LandmarkId { get; set; }
        public bool IsCoPartner { get; set; }
    }

    public class AlkhidmatCentreGrid : BaseModelGrid
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string ContactNo1 { get; set; }
        public string ContactNo2 { get; set; }
        public bool IsCoPartner { get; set; }
    }
}
