namespace CCTracking.Dto
{
    public class UnionCouncil : BaseModel
    {
        public int TownId { get; set; }
        public string TownDesc { get; set; }
        public string Name { get; set; }
    }

    public class UnionCouncilGrid : BaseModelGrid
    {
        public int Id { get; set; }
        public string TownDesc { get; set; }
        public string Name { get; set; }
    }
}
