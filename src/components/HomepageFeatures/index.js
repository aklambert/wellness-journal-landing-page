import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

// Define features to be listed in section briefly showcasing the main features
const FeatureList = [
  {
    title: 'Save custom exercises',
    Svg: require('@site/static/img/undraw_workout_wqgp.svg').default,
    description: (
      <>
        Add exercises to use in workouts, giving them custom descriptions
      </>
    ),
  },
  {
    title: 'Build custom workouts',
    Svg: require('@site/static/img/undraw_athletes-training_koqa.svg').default,
    description: (
      <>
        Use your custom exercises to build your own personalized workouts
      </>
    ),
  },
  {
    title: 'Track workout progression',
    Svg: require('@site/static/img/undraw_fitness-tracker_y5q5.svg').default,
    description: (
      <>
        As you progress through a workout, track which exercises are complete
      </>
    ),
  },
  {
    title: 'Log workout completion',
    Svg: require('@site/static/img/undraw_checklist_bwxa.svg').default,
    description: (
      <>
        After finishing a workout, log it as complete. You can then see logs with a date, and name of the workout completed
      </>
    ),
  },
  {
    title: 'Journal',
    Svg: require('@site/static/img/undraw_personal-notebook_blje.svg').default,
    description: (
      <>
        Use the journal feature to write notes, or journal about anything you want to 
      </>
    ),
  },
  {
    title: 'Timer',
    Svg: require('@site/static/img/undraw_time-management_fedt.svg').default,
    description: (
      <>
        Set a countdown timer for timing exercises, using a focus timer, or use it for whatever you'd like
      </>
    ),
  },
];

/**
 * Feature component, containing a brief description of a feature, and an image 
 * 
 * @returns a Feature component
 */
function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}


/**
 * Build the homepage features section, using the defined list of features 
 * to form a Feature component for each feature
 * 
 * @returns the HomepageFeatures component
 */
export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
