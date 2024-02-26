import _ from "lodash";

export function fetchOptions() {
  return [
    "Ruby",
    "React",
    "Java",
    "Python",
    "Javascript",
    "Typescript",
    "SQL",
    "C",
    "C++",
    "Kotlin",
    "HTML",
    "CSS",
  ];
}

export function fetchFilteredOptions(searchTerm) {
  const allOptions = fetchOptions();
  const filteredOption = _.filter(allOptions, (option) =>
    _.includes(_.lowerCase(option), _.lowerCase(searchTerm))
  );
  return filteredOption;
}

// promise:

export function fetchFilteredOptions(searchTerm) {
  const allOptions = fetchOptions();
  const filterValues = _.filter(allOptions, (option) =>
    _.includes(_.lowerCase(option), _.lowerCase(searchTerm))
  );
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(filterValues);
    }, 2000);
  });
}
