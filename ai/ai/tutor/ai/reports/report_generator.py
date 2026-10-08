def generate_report(experiment_name, observations, result):
    """
    Generate a basic experiment report structure.
    Later this can be enhanced using an AI model.
    """

    report = f"""
Experiment: {experiment_name}

Observations:
{observations}

Result:
{result}

Conclusion:
The experiment was completed successfully.
"""

    return report.strip()
