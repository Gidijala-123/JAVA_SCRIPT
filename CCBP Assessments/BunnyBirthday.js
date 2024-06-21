function main() {
  const birthdaysList = ["2000-05-13", "June 7 2021", "03/24/2000"];
  const buntyBirthday = new Date("2000-06-13");

  let days = 0;
  let months = 0;
  let years = 0;

  birthdaysList.map((each) => {
    const iptDates = new Date(each);
    if (buntyBirthday.getDate() === iptDates.getDate()) {
      days++;
    }
    if (buntyBirthday.getMonth() === iptDates.getMonth()) {
      months++;
    }
    if (buntyBirthday.getFullYear() === iptDates.getFullYear()) {
      years++;
    }
  });
  console.log(days - 1);
  console.log(months);
  console.log(years);
}

main()
