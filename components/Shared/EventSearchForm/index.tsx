import Button from '@/components/Shared/Button';
import { EventSearchParams } from '@/types/eventSearchForm';
import { Field, Form, Formik } from 'formik';
import classes from './index.module.css';
type Props = {
  values: EventSearchParams;
  onSearch: (values: EventSearchParams) => void;
};

function EventSearchForm({ values, onSearch }: Props) {
  return (
    <Formik initialValues={values} onSubmit={onSearch}>
      {() => (
        <Form className={classes.form}>
          <div className={classes.control}>
            <label htmlFor="year" className={classes.label}>
              Year
            </label>
            <Field as="select" name="year" className={classes.select}>
              <option disabled value="">
                select year
              </option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
            </Field>
          </div>
          <div className={classes.control}>
            <label htmlFor="month" className={classes.label}>
              Month
            </label>
            <Field as="select" name="month" className={classes.select}>
              <option disabled value="">
                select month
              </option>
              <option value="1">January</option>
              <option value="2">February</option>
              <option value="3">March</option>
              <option value="4">April</option>
              <option value="5">May</option>
              <option value="6">June</option>
              <option value="7">July</option>
              <option value="8">August</option>
              <option value="9">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </Field>
          </div>
          <Button type="submit">Search</Button>
        </Form>
      )}
    </Formik>
  );
}

export default EventSearchForm;
