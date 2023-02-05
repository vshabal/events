import Button from '@/components/Shared/Button';
import { EventSearchParams } from '@/types/eventSearchForm';
import { Field, Form, Formik } from 'formik';
import { useMemo } from 'react';
import classes from './index.module.css';
type Props = {
  values?: EventSearchParams;
  onSearch: (values: EventSearchParams) => void;
};

const DEFAULT_VALUE = '';

const DEFAULT_VALUES = {
  year: DEFAULT_VALUE,
  month: DEFAULT_VALUE
};

const YEAR_OPTIONS = [
  {
    value: DEFAULT_VALUE,
    label: 'select year'
  },
  {
    value: '2021',
    label: '2021'
  },
  {
    value: '2022',
    label: '2022'
  }
];

const MONTH_OPTIONS = [
  {
    value: DEFAULT_VALUE,
    label: 'select month'
  },
  {
    value: '1',
    label: 'January'
  },
  {
    value: '2',
    label: 'February'
  },
  {
    value: '3',
    label: 'March'
  },
  {
    value: '4',
    label: 'April'
  },
  {
    value: '5',
    label: 'May'
  },
  {
    value: '6',
    label: 'June'
  },
  {
    value: '7',
    label: 'July'
  },
  {
    value: '8',
    label: 'August'
  },
  {
    value: '9',
    label: 'September'
  },
  {
    value: '10',
    label: 'October'
  },
  {
    value: '11',
    label: 'November'
  },
  {
    value: '12',
    label: 'December'
  }
];

function EventSearchForm({ values = DEFAULT_VALUES, onSearch }: Props) {
  const safeValues = useMemo(() => getSafeValues(values), [values]);

  return (
    <Formik key={getKey(values)} initialValues={safeValues} onSubmit={onSearch}>
      {() => {
        return (
          <Form className={classes.form}>
            <div className={classes.control}>
              <label htmlFor="year" className={classes.label}>
                Year
              </label>
              <Field as="select" name="year" className={classes.select}>
                {YEAR_OPTIONS.map((yearOption) => (
                  <option key={yearOption.value} value={yearOption.value}>
                    {yearOption.label}
                  </option>
                ))}
              </Field>
            </div>
            <div className={classes.control}>
              <label htmlFor="month" className={classes.label}>
                Month
              </label>
              <Field as="select" name="month" className={classes.select}>
                {MONTH_OPTIONS.map((monthOption) => (
                  <option key={monthOption.value} value={monthOption.value}>
                    {monthOption.label}
                  </option>
                ))}
              </Field>
            </div>
            <Button type="submit">Search</Button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default EventSearchForm;

function getKey(eventSearchParams: EventSearchParams) {
  return Object.values(eventSearchParams).join('-');
}

function isValidOptionValue(value: string, options: { value: string }[]) {
  return options.some((option) => option.value === value);
}

function getSafeValues(values: EventSearchParams) {
  return {
    year: isValidOptionValue(values.year, YEAR_OPTIONS) ? values.year : DEFAULT_VALUE,
    month: isValidOptionValue(values.month, MONTH_OPTIONS) ? values.month : DEFAULT_VALUE
  };
}
