function X(list)
{
  return sum(list.filter(function(i) { return i > 0; }));
}
