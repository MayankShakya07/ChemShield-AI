def generate_viva(experiment_name):
    """
    Generate basic viva questions.
    Later these questions can be generated dynamically using AI.
    """

    questions = [
        f"What is the principle of {experiment_name}?",
        f"What precautions should be taken during {experiment_name}?",
        f"What are the important observations in {experiment_name}?",
        f"What could cause an incorrect result in {experiment_name}?",
        f"What is the conclusion of {experiment_name}?"
    ]

    return questions
