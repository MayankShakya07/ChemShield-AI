def ask_tutor(question):
    """
    Chemistry tutor module.

    This is the initial placeholder.
    Later it will be connected to the selected AI API.
    """

    if not question.strip():
        return "Please enter a chemistry question."

    return (
        f"You asked: {question}\n\n"
        "ChemShield AI Tutor will provide a detailed chemistry "
        "explanation here."
    )
