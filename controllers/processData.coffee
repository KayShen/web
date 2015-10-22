index = {}

index.process = (list)->
  sum = 0
  max = 0
  min = 100
  for item in list
    sum = sum + +item.select
    if max < item.select
      max = +item.select
    if min > +item.select
      min = +item.select
  average = sum / list.length
  console.log sum
  {average, min, max}



module.exports = index