namespace CCTracking.Dto
{
    public class Town : BaseModel
    {
        public string Name { get; set; }
    }

    public class TownGrid : BaseModelGrid
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }
}
