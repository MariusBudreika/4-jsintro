function enough(cap, on, wait) {
    if (cap >= on + wait) {
        return 0
    } if (cap < on + wait) {
        return (cap - on -wait) *-1
    }
  }

  console.log(enough(10, 5, 5), 0);
  console.log(enough(100, 60, 50), 10);
  console.log(enough(20, 5, 5), 0);