function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

function getNameOfMonth(month) {
  const date = new Date();
  date.setMonth(month);

  return date.toLocaleString("default", { month: "long" });
}

// 1. Using an instance of the Array class,
// create an associative array containing
// the names of the months of the year and
// the number of days in each month.
function createMonthsArray() {
  const date = new Date();
  const currentYear = date.getFullYear();

  const months = Array(12).fill(0).map((_, id) => id);

  return months.map(m => [getNameOfMonth(m), getDaysInMonth(currentYear, m)]);
}

console.log("1.");
console.log(createMonthsArray());
console.log("");

// 2. Write a code in the JavaScript language
// that would perform an enumeration of the
// numbers from 50 to 5, except for the number 10.
class NumbersEnumerator {
  constructor(start, end, except) {
    const exceptFilterFn = val => {
      if (typeof except === "undefined") {
        return true;
      } else if (typeof except === "number") {
        return val !== except;
      } else if (Array.isArray(except)) {
        return except.filter(e => e === val).length > 0;
      } else {
        throw new Error('Unexpected error.');
      }
    }

    if (start < end) {
      this.range = Array(end - start + 1)
        .fill(start)
        .map((val, id) => val + id)
        .filter(exceptFilterFn);
    } else if (start > end) {
      this.range = Array(start - end + 1)
        .fill(start)
        .map((val, id) => val - id)
        .filter(exceptFilterFn);
    } else {
      this.range = [start].filter(exceptFilterFn);
    }
  }

  [Symbol.iterator]() {
    let id = -1;
    const range = this.range;
    const maxId = this.range.length - 1;

    return {
      next() {
        if (id < maxId) {
          id += 1;
          return {
            value: range[id],
            done: false 
          };
        }

        return {
          done: true,
        };
      }
    }
  }
}
console.log("2.");
for (const n of new NumbersEnumerator(50, 5, 10)) {
  console.log(n);
}
console.log("");

// 3. Having created an instance of the String class,
// split the string into separate words that
// will be elements of the array.
function splitIntoWords(text) {
  if (typeof text !== "string" && (!(text instanceof String))) {
    throw new TypeError("Expected text to be string");
  }

  text = text.trim();

  if (text.replace(/\s/g, "").length === 0) {
    throw new Error("Expected string to contain some characters aside space.")
  }

  return text.split(" ");
}

console.log("3.");
console.log(splitIntoWords(new String("Hello World These are some words")));
