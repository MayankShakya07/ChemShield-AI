from tutor.tutor import ask_tutor
from reports.report_generator import generate_report
from viva.viva_generator import generate_viva


def ask_ai(question):
    """
    Main AI entry point.
    Later this can be connected to an actual AI API.
    """
    return ask_tutor(question)


if __name__ == "__main__":
    question = input("Ask ChemShield AI: ")
    response = ask_ai(question)
    print("\nAI:", response)
