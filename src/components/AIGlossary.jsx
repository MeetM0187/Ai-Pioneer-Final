import { useEffect } from 'react'
import '../styles/AIGlossary.css'

const AIGlossary = () => {
  useEffect(() => {
    const animatedElements = document.querySelectorAll('.glossary-grid .term-card')

    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver((entries, observerInstance) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observerInstance.unobserve(entry.target)
          }
        })
      }, {
        threshold: 0.1
      })

      animatedElements.forEach(el => {
        el.classList.add('fade-in')
        observer.observe(el)
      })
    } else {
      animatedElements.forEach(el => {
        el.classList.add('visible')
        el.classList.remove('fade-in')
      })
    }
  }, [])

  const glossaryTerms = [
    {
      term: 'A/B TESTING',
      definition: 'A controlled, real-life experiment designed to compare two variants of a system or a model, A, and B.'
    },
    {
      term: 'ACCURACY',
      definition: 'Accuracy is a scoring system in binary classification and is calculated as (True Positives + True Negatives) / (True Positives + True Negatives + False Positives + False Negatives).'
    },
    {
      term: 'ACTIONABLE INTELLIGENCE',
      definition: 'Information you can leverage to support decision making.'
    },
    {
      term: 'ACTIVATION FUNCTION',
      definition: 'In the context of Artificial Neural Networks, a function that takes in the weighted sum of all of the inputs from the previous layer and generates an output value to ignite the next layer.'
    },
    {
      term: 'ACTIVE LEARNING',
      definition: 'A special case of Semi-Supervised Machine Learning in which a learning agent can interactively query an oracle (usually, a human annotator) to obtain labels at new data points.'
    },
    {
      term: 'ADVERSARIAL MACHINE LEARNING',
      definition: 'A technique employed in the field of machine learning that attempts to make models more robust by exposing them to adversarial (and sometimes malicious) input.'
    },
    {
      term: 'ADABOOST',
      definition: 'A popular ensemble learning algorithm that combines weak classifiers into a strong classifier by weighting them according to their accuracy.'
    },
    {
      term: 'AGENT',
      definition: 'An intelligent agent is an AI system that can independently perceive its environment and act autonomously to reach an objective.'
    },
    
    {
      term: 'AI BIAS',
      definition: 'AI bias happens when machine learning algorithms produce prejudiced results due to biased training data or incorrect inferences during the learning process.'
    },
    {
      term: 'AI DETECTOR',
      definition: 'A tool designed to detect when a piece of text (or sometimes an image or video) was created by generative AI tools.'
    },
    {
      term: 'AI ETHICS',
      definition: 'A branch of the ethics of technology specific to artificially intelligent systems, addressing biases in machine learning.'
    },
    {
      term: 'AI FRAMEWORKS',
      definition: 'Tools that make the creation of machine learning/deep learning, neural networks, and NLP applications easier and faster by offering ready solutions.'
    },
    {
      term: 'AI MODEL GOODNESS MEASUREMENT METRICS',
      definition: 'Metrics used to measure the performance of AI models, including accuracy, precision, recall, F-measure, and more.'
    },
    {
      term: 'AI OPS',
      definition: 'Optimizing IT operations using AI, involving anomaly detection, problem diagnosis, and proactive issue prevention.'
    },
    {
      term: 'AI SAFETY',
      definition: 'An interdisciplinary field concerned with the long-term impacts of AI and its potential progression to superintelligence.'
    },
    {
      term: 'ALGORITHM',
      definition: 'An unambiguous specification of a process describing how to solve a class of problems that can perform calculations, process data and automate reasoning.'
    },
    {
      term: 'ALGORITHMIC BIAS',
      definition: 'Unfair or discriminatory outcomes in AI systems caused by biased training data or algorithms.'
    },
    {
      term: 'ALIGNMENT',
      definition: 'Tweaking an AI to better produce the desired outcome, from moderating content to maintaining positive interactions.'
    },
    {
      term: 'ALPHAGO',
      definition: 'An AI-powered program designed to play the board game Go, known for its breakthrough performance in this complex game.'
    },
    {
      term: 'ANAPHORA',
      definition: 'In linguistics, a reference to a noun by way of a pronoun, important in natural language processing.'
    },
    {
      term: 'ANNOTATION',
      definition: 'A metadatum attached to a piece of data, typically provided by a human annotator.'
    },
    {
      term: 'ANTHROPOMORPHISM',
      definition: 'When humans tend to give nonhuman objects humanlike characteristics, such as believing a chatbot has emotions.'
    },
    {
      term: 'API',
      definition: 'Application Programming Interface via which developers can access data and pre-made code solutions.'
    },
    {
      term: 'AREA UNDER THE CURVE (AUC)',
      definition: 'A methodology used in Machine Learning to determine which one of several used models has the highest performance.'
    },
    {
      term: 'ARTIFICIAL GENERAL INTELLIGENCE (AGI)',
      definition: 'Also known as strong AI, AGI is a type of artificial intelligence that is considered human-like, still in its preliminary stages.'
    },
    {
      term: 'ARTIFICIAL INTELLIGENCE',
      definition: 'The general concept of machines acting in a way that simulates or mimics human intelligence, including communication and decision making.'
    },
    {
      term: 'ARTIFICIAL NARROW INTELLIGENCE (ANI)',
      definition: 'Also known as weak AI, ANI is a type of artificial intelligence that can only focus on one task or problem at a given time (e.g. playing a game against a human competitor). This is the current existing form of AI.'
    },
    {
      term: 'ARTIFICIAL NEURAL NETWORKS',
      definition: 'An architecture composed of successive layers of simply connected units called artificial neurons interweaved with non-linear activation functions, which is vaguely reminiscent of the neurons in an animal brain.'
    },
    {
      term: 'ASSOCIATION RULE LEARNING',
      definition: 'A rule-based Machine Learning method for discovering interesting relations between variables in large data sets.'
    },
    {
      term: 'AUGMENTED INTELLIGENCE',
      definition: 'Augmented intelligence is the use of AI to enhance human intelligence and inform decision-making instead of the AI performing tasks and processing data independently to replace humans.'
    },
    {
      term: 'AUTOENCODER',
      definition: 'A type of Artificial Neural Network used to produce efficient representations of data in an unsupervised and non-linear manner, typically to reduce dimensionality.'
    },
    {
      term: 'AUTOMATED SPEECH RECOGNITION',
      definition: 'A subfield of Computational Linguistics interested in methods that enables the recognition and translation of spoken language into text by computers.'
    },
    {
      term: 'AUTOMATIC SPEECH RECOGNITION (ASR)',
      definition: 'ASR is a type of natural language processing that is associated with recognizing human speech such as voice assistants.'
    },
    {
      term: 'AUTOML (AUTOMATED MACHINE LEARNING)',
      definition: 'Tools and techniques that automate the process of training machine learning models.'
    },
    {
      term: 'AUTOMATION',
      definition: 'Processing according to pre-programmed rules.'
    },
    {
      term: 'AUTONOMOUS',
      definition: 'A machine is described as autonomous if it can perform its task or tasks without needing human intervention.'
    },
    {
      term: 'BACKPROPAGATION (BACKPROPAGATION THROUGH TIME)',
      definition: 'A method used to train Artificial Neural Networks to compute a gradient that is needed in the calculation of the network\'s weights.'
    },
    {
      term: 'BACKWARD CHAINING',
      definition: 'A method where the model starts with the desired output and works in reverse to find data that might support it.'
    },
    {
      term: 'BAG OF WORDS',
      definition: 'The bag of words model is a simple representation of text data used in natural language processing, where the text is represented as a vector of word counts or frequencies.'
    },
    {
      term: 'BATCH',
      definition: 'The set of examples used in one gradient update of model training.'
    },
    {
      term: 'BATCH NORMALIZATION',
      definition: 'A technique to improve training speed and stability in neural networks.'
    },
    {
      term: 'BATCH SIZE',
      definition: 'Number of training samples used in one iteration.'
    },
    {
      term: 'BAYES\'S THEOREM',
      definition: 'A famous theorem is used by statisticians to describe the probability of an event based on prior knowledge of conditions that might be related to an occurrence.'
    },
    {
      term: 'BAYESIAN NETWORKS',
      definition: 'Also known as Bayes network, Bayes model, belief network, and decision network, is a graph-based model representing a set of variables and their dependencies.'
    },
    {
      term: 'BERT (aka Bidirectional Encoder Representation from Transformers)',
      definition: 'Google\'s technology. A large scale pretrained model that is first trained on very large amounts of unannotated data. The model is then transferred to an NLP task where it is fed another smaller task-specific dataset which is used to fine-tune the final model.'
    },
    {
      term: 'BIAS (Inductive Bias, Confirmation Bias)',
      definition: 'Inductive Bias: the set of assumptions that the learner uses when predicting outputs given inputs that have not been encountered yet. Confirmation Bias: the tendency to search for, interpret, favor, and recall information in a way that confirms one\'s own beliefs or hypotheses while giving disproportionately less attention to information that contradicts it.'
    },
    {
      term: 'BIAS-VARIANCE TRADEOFF',
      definition: 'A conflict arises when data scientists try to simultaneously minimize bias and variance, which prevents supervised algorithms from generalizing beyond their training set.'
    },
    {
      term: 'BIG DATA',
      definition: 'Datasets that are too large or complex to be used by traditional data processing applications.'
    },
    {
      term: 'BING CHAT',
      definition: 'Bing Chat (also called Bing AI) is a chatbot developed by Microsoft and integrated into their search engine, Bing, from February 7, 2023, onwards. The chatbot was developed in collaboration with OpenAI, based on their GPT-4 technology.'
    },
    {
      term: 'BLACK BOX AI',
      definition: 'A black box AI is an AI system that doesn\'t show how it operates and processes user input. After you provide a black box AI input, it will produce an output. However, you cannot view its code and analyze its logic for producing such results.'
    },
    {
      term: 'BOOSTING',
      definition: 'A Machine Learning ensemble meta-algorithm for primarily reducing bias and variance in supervised learning, and a family of Machine Learning algorithms that convert weak learners to strong ones.'
    },
    {
      term: 'BOUNDING BOX',
      definition: 'The smallest (rectangular) box fully contains a set of points or an object.'
    },
    {
      term: 'BRUTE FORCE SEARCH',
      definition: 'A search that isn\'t limited by clustering/approximations; it searches across all inputs. Often more time-consuming and expensive, but more thorough.'
    },
    {
      term: 'BURSTINESS',
      definition: 'Burstiness is a measurement of variation in sentence structure in length. AI writing tends to display low levels of burstiness, while human writing tends to have higher burstiness.'
    },
    {
      term: 'CATAPHORA',
      definition: 'In linguistics, a cataphora is a reference placed before any instance of the noun it refers to. For example, in the sentence, "Though he enjoyed the entrée, John didn\'t like the appetizers," the word "he" is a cataphora.'
    },
    {
      term: 'CATEGORIZATION',
      definition: 'Categorization is a natural language processing function that assigns a category to a document.'
    },
    {
      term: 'CENTRAL PROCESSING UNIT (CPU)',
      definition: 'The electronic circuitry within a computer carries out the instructions of a computer program by performing the basic arithmetic, logical, control, and input/output operations specified by the instructions.'
    },
    {
      term: 'CHATBOT',
      definition: 'A computer program or an AI is designed to interact with human users through conversation.'
    },
    {
      term: "CHATGPT",
      definition: "The chatbot by OpenAI is the fastest consumer app to ever reach 100 million users."
    },
    {
      term: "CHINESE ROOM",
      definition: "A philosophical thought experiment by John Searle showing that passing the Turing test doesn’t imply true understanding."
    },
    {
      term: "CLASSIFICATION",
      definition: "The task of mapping input variables to discrete output classes, often used in supervised Machine Learning."
    },
    {
      term: "CLIP",
      definition: "A neural network by OpenAI that learns visual concepts from natural language supervision using images and captions."
    },
    {
      term: "CLOUD COMPUTING",
      definition: "The delivery of computing services like storage, processing, and networking over the internet."
    },
    {
      term: "CLUSTERING",
      definition: "An unsupervised learning task that groups similar objects together into clusters."
    },
    {
      term: "COGNITIVE COMPUTING",
      definition: "A term often used in place of AI to emphasize human-like thought processes in machines."
    },
    {
      term: "COGNITIVE SCIENCE",
      definition: "An interdisciplinary study of the mind combining AI, philosophy, linguistics, psychology, neuroscience, and anthropology."
    },
    {
      term: "COLD-START",
      definition: "A problem where a system lacks sufficient information to make predictions for new users or items."
    },
    {
      term: "COLLABORATIVE FILTERING",
      definition: "A recommender system method that predicts a user's interests based on the preferences of similar users."
    },
    {
      term: "COMPOSITE AI",
      definition: "A technique that combines multiple AI methods to achieve better performance and results."
    },
    {
      term: "COMPUTATIONAL LEARNING THEORY",
      definition: "A field focused on designing and analyzing machine learning algorithms."
    },
    {
      term: "COMPUTATIONAL SEMANTICS",
      definition: "The automation of meaning representation and reasoning for natural language expressions."
    },
    {
      term: "COMPUTER VISION",
      definition: "A field that enables machines to interpret and understand visual information from images or videos."
    },
    {
      term: "CONFIDENCE INTERVAL",
      definition: "An estimate range likely to contain the true value of a population parameter with a specified confidence level."
    },
    {
      term: "CONSTITUTIONAL AI",
      definition: "An approach by Anthropic that aligns AI behavior with a set of predefined values or principles."
    },
    {
      term: "CONTRIBUTOR",
      definition: "A human annotator working on the Appen platform to provide labeled data."
    },
    {
      term: "CONVOLUTIONAL NEURAL NETWORK (CNN)",
      definition: "A type of deep neural network commonly used for image processing tasks."
    },
    {
      term: "COPILOT",
      definition: "Microsoft 365’s AI assistant built on OpenAI’s GPT-4 to assist with productivity tasks."
    },
    {
      term: "CORPUS",
      definition: "A large collection of written or spoken material used to train language models."
    },
    {
      term: "CROSS-VALIDATION",
      definition: "A set of techniques to evaluate a model’s performance by testing it on different subsets of the data."
    },
    {
      term: "CURSE OF DIMENSIONALITY",
      definition: "A phenomenon where high-dimensional data becomes sparse and less useful for analysis."
    },
    {
      term: "CUTOFF DATE",
      definition: "The latest point in time a model was trained on data; it can't access events beyond this date."
    },
    {
      term: "DALL-E 2",
      definition: "A text-to-image AI model by OpenAI capable of generating realistic images from prompts."
    },
    {
      term: "DATA",
      definition: "The foundational component for AI and ML systems, including structured and unstructured data."
    },
    {
      term: "DATA ARCHITECT",
      definition: "A professional responsible for designing and managing the structure of data systems."
    },
    {
      term: "DATA AUGMENTATION",
      definition: "Enhancing datasets with additional information to improve model performance."
    },
    {
      term: "DATA LABELING",
      definition: "The act of tagging data to provide ground truth for supervised learning."
    },
    {
      term: "DATA LAKE",
      definition: "A centralized repository that stores structured and unstructured data for analytics and AI."
    },
    {
      term: "DATA MANAGER",
      definition: "A role that ensures data is legally sourced, properly stored, and governed for AI development."
    },
    {
      term: "DATA MINING",
      definition: "Analyzing datasets to discover useful patterns and insights."
    },
    {
      term: "DATA PREPROCESSING",
      definition: "Cleaning and transforming raw data before it’s used in analysis or modeling."
    },
    {
      term: "DATA SCIENCE",
      definition: "An interdisciplinary field using scientific methods and systems to extract knowledge from data."
    },
    {
      term: "DATA SCIENTIST",
      definition: "A professional who analyzes large datasets to identify patterns and insights."
    },
    {
      term: "DATASET",
      definition: "A collection of related data points used for analysis or training models."
    },
    {
      term: "DECISION TREE",
      definition: "A supervised learning model that splits data based on features to make decisions."
    },
    {
      term: "DEEP BLUE",
      definition: "IBM’s chess-playing computer that defeated world champion Garry Kasparov."
    },
    {
      term: "DEEP LEARNING",
      definition: "A machine learning method based on neural networks that learn from data representations."
    },
    {
      term: "DEEPFAKE",
      definition: "AI-generated images, videos, or audio that mimic real people or events using deep learning."
    },
    {
      term: "DIFFUSION",
      definition: "A machine learning method that adds and removes noise from data to train models like text-to-image generators."
    },
    {
      term: "DIGITAL ECOSYSTEM",
      definition: "A network of connected digital services and platforms working together."
    },
    {
      term: "DIMENSIONALITY REDUCTION",
      definition: "Techniques to reduce the number of input variables while preserving relevant information."
    },
    {
      term: "DISCRIMINATOR",
      definition: "In GANs, a model that distinguishes between real and fake data generated by another model."
    },
    {
      term: "DROPOUT",
      definition: "A regularization method in neural networks that randomly disables neurons during training to avoid overfitting."
    },
    {
      term: "EDGE COMPUTING",
      definition: "A model where data is processed near the data source rather than in a centralized cloud."
    },
    {
      term: "ELIZA",
      definition: "An early chatbot simulating a psychotherapist, developed in the 1960s."
    },
    {
      term: "EMBEDDED AGENTS",
      definition: "AI systems with physical form that interact with the real world."
    },
    {
      term: "EMBEDDING",
      definition: "A representation of data (like words) in a numerical vector space."
    },
    {
      term: "EMERGENCE",
      definition: "Unpredictable capabilities that appear in complex AI systems."
    },
    {
      term: "EMERGENT BEHAVIOR",
      definition: "Unexpected abilities or patterns arising from AI model training."
    },
    {
      term: "END-TO-END LEARNING",
      definition: "Training models to complete a task from input to output in a single process."
    },
    {
      term: "ENSEMBLE METHODS",
      definition: "Techniques that combine multiple models to improve prediction accuracy."
    },
    {
      term: "ENTITY ANNOTATION",
      definition: "Labeling entities in text like names, places, or organizations for machine reading."
    },
    {
      term: "ENTITY EXTRACTION",
      definition: "Structuring unstructured text to identify meaningful entities."
    },
    {
      term: "ENTROPY",
      definition: "A measure of uncertainty or randomness in data."
    },
    {
      term: "EPOCH",
      definition: "One complete pass through the training dataset during model training."
    },
    {
      term: "ETHICAL AI",
      definition: "AI that follows ethical principles like fairness, privacy, and non-discrimination."
    },
    {
      term: "ETHICAL CONSIDERATIONS",
      definition: "Awareness of the ethical impact of AI use, including fairness and privacy concerns."
    },
    {
      term: "ETHICS IN AI",
      definition: "The study of ethical and moral implications in AI design and deployment."
    },
    {
      term: "EU AI ACT",
      definition: "A regulatory framework by the EU to ensure responsible AI development and use."
    },
    {
      term: "EXPERT LEARNING",
      definition: "The process of training AI models using the knowledge of human experts."
    },
    {
      term: "EXPERT SYSTEM",
      definition: "Software that mimics human expert decision-making in a specific domain."
    },
    {
      term: "EXPLAINABLE AI",
      definition: "AI systems that can provide understandable explanations for their decisions."
    },
    {
      term: "FACE RECOGNITION",
      definition: "Technology that identifies or verifies individuals using facial features."
    },
    {
      term: "FALSE NEGATIVE",
      definition: "An error where the model fails to detect a positive result when it actually exists."
    },
    {
      term: "FALSE POSITIVE",
      definition: "An error where the model incorrectly identifies a result as positive when it’s not."
    },
    {
      term: "FEATURE",
      definition: "An input variable used in a model."
    },
    {
      term: "FEATURE ENGINEERING",
      definition: "Creating and selecting features to improve model performance."
    },
    {
      term: "FEATURE LEARNING",
      definition: "Automatically identifying the best data representations for classification or detection."
    },
    {
      term: "FEED-FORWARD NETWORKS",
      definition: "Neural networks where information moves in one direction without cycles."
    },
    {
      term: "FOOM",
      definition: "A hypothetical rapid acceleration of AI intelligence beyond human control."
    },
    {
      term: "FORWARD CHAINING",
      definition: "A reasoning method where conclusions are derived from known facts to solve problems."
    },
    {
      term: "FRÉCHET INCEPTION DISTANCE (FID)",
      definition: "A metric used to evaluate the realism of images generated by AI models."
    },
    {
      term: "F-SCORE",
      definition: "A metric combining precision and recall to evaluate a model’s accuracy."
    },
    {
      term: "GARBAGE IN, GARBAGE OUT",
      definition: "Poor input data results in flawed or nonsensical output from AI systems."
    },
    {
      term: "GENERAL AI",
      definition: "A type of AI that can perform any intellectual task that a human can."
    },
    {
      term: "GENERAL DATA PROTECTION REGULATION (GDPR)",
      definition: "EU regulation protecting individual data privacy and rights."
    },
    {
      term: "GENERATIVE ADVERSARIAL NETWORKS (GANS)",
      definition: "A class of algorithms using two neural networks to generate realistic data."
    },
    {
      term: "GENERATIVE AI",
      definition: "AI that creates content like text, images, video, and code."
    },
    {
      term: "GENERATIVE PRE-TRAINED TRANSFORMER (GPT)",
      definition: "A type of language model trained to generate human-like text. Latest version is GPT-4."
    },
    {
      term: "GENETIC ALGORITHM",
      definition: "A search heuristic that simulates natural evolution to solve optimization problems."
    },
    {
      term: "GOOGLE BARD",
      definition: "An AI chatbot by Google that retrieves real-time web information, unlike ChatGPT."
    },
    {
      term: "GRADIENT DESCENT",
      definition: "An optimization algorithm used to minimize the loss function in model training."
    },
    {
      term: "GRAPHIC PROCESSING UNIT (GPU)",
      definition: "A processor that accelerates computations, especially suited for AI due to its parallel architecture."
    },
    {
      term: "GROUND TRUTH",
      definition: "Verified data used as a benchmark for training or validating AI models."
    },
    {
      term: "GUARDRAILS",
      definition: "Rules or policies set to ensure AI models behave safely and ethically."
    },
    {
      "term": "HALLUCINATION",
      "definition": "An incorrect response from AI. Can include generative AI producing answers that are incorrect but stated with confidence as if correct. The reasons for this aren't entirely known."
    },
    {
      "term": "HEURISTIC",
      "definition": "A computer science technique designed for quick, optimal, solution-based problem solving."
    },
    {
      "term": "HIDDEN LAYER",
      "definition": "A layer of neurons whose outputs are connected to the inputs of other neurons, therefore not directly visible as a network output."
    },
    {
      "term": "HUMAN FEEDBACK",
      "definition": "Human Feedback is being used to improve the results of the machine learning models."
    },
    {
      "term": "HUMAN-IN-THE-LOOP",
      "definition": "Human-in-the-loop (HITL) is a branch of artificial intelligence that leverages both human and machine intelligence to create machine learning models. In a traditional human-in-the-loop approach, people are involved in a virtuous circle where they train, tune, and test a particular algorithm."
    },
    {
      "term": "HYBRID AI",
      "definition": "Hybrid AI is a combination of human insight and AI, such as machine learning and deep learning."
    },
    {
      "term": "HYPERPARAMETER (Hyperparameter Tuning)",
      "definition": "A configuration, external to the model and whose value cannot be estimated from data, that data scientists continuously tweak during the process of training a model. Hyperparameter Tuning is the process of manually determining the optimal configuration to train a specific model."
    },
    {
      "term": "HYPERPARAMETERS",
      "definition": "Parameters that aren’t learned from the data but set prior to training."
    },
    {
      "term": "IMAGE RECOGNITION",
      "definition": "The problem in Computer Vision of determining whether an image contains some specific object, feature, or activity."
    },
    {
      "term": "IMAGENET",
      "definition": "A large visual dataset made of 14 million URLs of hand-annotated images organized in twenty-thousand (20,000) different categories, designed for use in visual object recognition research."
    },
    {
      "term": "INFERENCE",
      "definition": "The process of making predictions by applying a trained model to new, unlabeled instances."
    },
    {
      "term": "INFORMATION RETRIEVAL",
      "definition": "The area of Computer Science studies the process of searching for information in a document, searching for documents themselves, and also searching for metadata that describes data, and for databases of texts, images, or sounds."
    },
    {
      "term": "INTENT",
      "definition": "Commonly used in training data for chatbots and other natural language processing tasks, this is a type of label that defines the purpose or goal of what is said. For example, the intent for the phrase \"turn the volume down\" could be \"decrease volume\"."
    },
    {
      "term": "JASPER",
      "definition": "Jasper is an AI platform that enables businesses to build, deploy, and manage AI applications."
    },
    {
      "term": "JUPYTER NOTEBOOK",
      "definition": "An open-source web application that allows the creation and sharing of documents containing live code, equations, visualizations, and narrative text."
    },
    {
      "term": "K-MEANS CLUSTERING",
      "definition": "A popular clustering algorithm that partitions data into clusters based on similarity."
    },
    {
      "term": "K-NEAREST NEIGHBORS",
      "definition": "K-Nearest Neighbors is a supervised machine learning algorithm for classification and regression."
    },
    {
      "term": "KERAS",
      "definition": "A high-level neural networks API running on top of TensorFlow, Theano, or CNTK."
    },
    {
      "term": "KNOWLEDGE ENGINEERING",
      "definition": "Knowledge engineering is the field of AI that aims to emulate a human expert's knowledge in a certain field."
    },
    {
      "term": "LABEL",
      "definition": "A part of training data that identifies the desired output for that particular piece of data."
    },
    {
      "term": "LABELED DATA",
      "definition": "Data that has been labeled with a specific category or class."
    },
    {
      "term": "LARGE LANGUAGE MODEL",
      "definition": "AI models like GPT that can understand and generate text."
    },
    {
      "term": "LARGE LANGUAGE MODEL META AI (LLAMA)",
      "definition": "LLaMA is a family of open-source large language models (LLMs) launched by Meta AI in 2023."
    },
    {
      "term": "LAYER (Hidden Layer)",
      "definition": "A series of neurons in an Artificial Neural Network process a set of input features, or, by extension, the output of those neurons."
    },
    {
      "term": "LEARNING RATE",
      "definition": "A scalar value is used by the gradient descent algorithm at each iteration of the training phase of an Artificial Neural Network to multiply with the gradient."
    },
    {
      "term": "LEARNING-TO-LEARN",
      "definition": "A new direction within the field of Machine Learning investigating how algorithms can change the way they generalize by analyzing their own learning process and improving on it."
    },
    {
      "term": "LEARNING-TO-RANK",
      "definition": "The application of Machine Learning to the construction of ranking models for Information Retrieval systems."
    },
    {
      "term": "LIMITED MEMORY",
      "definition": "Systems with short-term memory limited to a given timeframe."
    },
    {
      "term": "LINEAR ALGEBRA",
      "definition": "Linear algebra is the key branch in mathematics when it comes to artificial intelligence and machine learning algorithms."
    },
    {
      "term": "LINEAR REGRESSION",
      "definition": "A simple type of regression taking a linear combination of features as an input, and outputting a continuous value."
    },
    {
      "term": "LINGUISTIC ANNOTATION",
      "definition": "Tagging a dataset of sentences with the subject of each sentence, ready for some form of analysis or assessment. Common uses for linguistically annotated data include sentiment analysis and natural language processing."
    },
    {
      "term": "LOGISTIC REGRESSION",
      "definition": "A type of regression generating a probability for each possible discrete label value in a classification problem by applying a sigmoid function to a linear prediction."
    },
    {
      "term": "LOGIT FUNCTION",
      "definition": "The inverse of the sigmoidal \"logistic\" function is used in mathematics, especially in statistics."
    },
    {
      "term": "LONG SHORT-TERM MEMORY NETWORKS",
      "definition": "A variation of the Recurrent Neural Network was proposed as a solution to the vanishing gradient problem."
    },
    {
      "term": "LOSS FUNCTION",
      "definition": "A mathematical function that measures the difference between predicted and actual values, used in training models."
    },
    {
      "term": "MACHINE INTELLIGENCE",
      "definition": "An umbrella term for various types of learning algorithms, including machine learning and deep learning."
    },
    {
      "term": "MACHINE LEARNING",
      "definition": "The subfield of Artificial Intelligence often uses statistical techniques to give computers the ability to \"learn\", i.e., progressively improve performance on a specific task, with data, without being explicitly programmed. Also: This subset of AI is particularly focused on developing algorithms that will help machines to learn and change in response to new data, without the help of a human being."
    },
    {
      "term": "MACHINE LEARNING LIFECYCLE MANAGEMENT",
      "definition": "DevOps for Machine Learning systems."
    },
    {
      "term": "MACHINE TRANSLATION",
      "definition": "A subfield of computational linguistics that studies the use of software to translate text or speech from one language to another. Also: The translation of a text by an algorithm, independent of any human involvement."
    },
    {
      "term": "MAX POOLING",
      "definition": "The process of reducing a matrix generated by a convolutional layer to a smaller matrix."
    },
    {
      "term": "MICROSOFT BING",
      "definition": "A search engine by Microsoft that can now use the technology powering ChatGPT to give AI-powered search results. It's similar to Google Bard in being connected to the internet."
    },
    {
      "term": "MIDJOURNEY",
      "definition": "MidJourney is a new AI art generator that turns text into an image. And not just any image, but a realistic, creative, or abstract masterpiece unlike we’ve never seen before!."
    },
    {
      "term": "ML OPS",
      "definition": "ML ops or machine learning operations is the process of taking an experimental machine learning model into a production web system. Machine learning models are tested and developed in isolated experimental systems. When an algorithm is ready to be launched, ML ops is practiced between data scientists, DevOps, and machine learning engineers to transition the algorithm to production systems."
    },
    {
      "term": "MOATS",
      "definition": "Moats are mechanisms that prevent competitors from copying a proprietary LLM. An LLM's moats are training data, model weights and the cost of training."
    },
    {
      "term": "MODEL",
      "definition": "A broad term referring to the product of AI training, created by running a machine learning algorithm on training data. Also: A model is an abstract representation of what a Machine Learning system has learned from the training data during the training process."
    },
    {
      "term": "MODEL COLLAPSE",
      "definition": "Model collapse is when low-quality, AI-generated content contaminates the training set for future models."
    },
    {
      "term": "MONTE CARLO",
      "definition": "An approximate methodology that uses repeated random sampling to generate synthetic simulated data."
    },
    {
      "term": "MULTI-MODAL LEARNING",
      "definition": "A subfield of Machine Learning aiming to interpret multimodal signals together and build models that can process and relate information from multiple types of data."
    },
    {
      "term": "MULTI-TASK LEARNING",
      "definition": "A subfield of Machine Learning that exploits similarities and differences across tasks to solve multiple tasks at the same time."
    },
    {
      "term": "MULTIMODAL AI",
      "definition": "A type of AI that can process multiple types of inputs, including text, images, videos and speech."
    },
    {
      "term": "NAIVE BAYES",
      "definition": "A family of simple probabilistic classifiers based on applying Bayes' theorem with strong independence assumptions between the features."
    },
    {
      "term": "NAMED ENTITY RECOGNITION",
      "definition": "A subtask of Information Extraction that seeks to identify and classify named entities in text into predetermined categories such as the names, locations, parts of speech, etc.."
    },
    {
      "term": "NARROW AI",
      "definition": "See Weak AI."
    },
    {
      "term": "NATURAL LANGUAGE GENERATION (NLG)",
      "definition": "This refers to the process by which a machine turns structured data into text or speech that humans can understand. Essentially, NLG is concerned with what a machine writes or says as the end part of the communication process."
    },
    {
      "term": "NATURAL LANGUAGE PROCESSING (NLP)",
      "definition": "The area of Artificial Intelligence studies the interactions between computers and human languages, in particular how to process and analyze large amounts of natural language data."
    },
    {
      "term": "NATURAL LANGUAGE UNDERSTANDING (NLU)",
      "definition": "As a subset of natural language processing, natural language understanding deals with helping machines recognize the intended meaning of language — taking into account its subtle nuances and any grammatical errors."
    },
    {
      "term": "NEURAL NETWORK",
      "definition": "Also called a neural net, a neural network is a computer system designed to function like the human brain. Although researchers are still working on creating a machine model of the human brain, existing neural networks can perform many tasks involving speech, vision, and board game strategy."
    },
    {
      "term": "NEURAL STYLE TRANSFER",
      "definition": "A technique that combines the content of one image with the style of another."
    },
    {
      "term": "NEURON",
      "definition": "A unit in an Artificial Neural Network processes multiple input values to generate a single output value."
    },
    {
      "term": "OBJECT DETECTION",
      "definition": "Object Detection is the process of identifying and locating objects in an image or video."
    },
    {
      "term": "OPENAI",
      "definition": "The start-up behind ChatGPT and Dall-E is already valued at $29b."
    },
    {
      "term": "OPTICAL CHARACTER RECOGNITION",
      "definition": "The conversion of images of printed, handwritten, or typed text into a machine-friendly textual format."
    },
    {
      "term": "OPTIMIZATION",
      "definition": "The selection of the best element (concerning some criterion) from some set of available alternatives."
    },
    {
      "term": "OVERFITTING",
      "definition": "The fact that a model unknowingly identified patterns in the noise and assumed those represented the underlying structure; is the production of a model that corresponds too closely to a particular set of data, and therefore fails to generalize well to unseen observations."
    },
    {
      "term": "PARAMETER",
      "definition": "A variable inside the model that helps it to make predictions. A parameter's value can be estimated using data and they are usually not set by the person running the model."
    },
    {
      "term": "PARAMETERS",
      "definition": "Numerical values that give LLMs structure and behavior, enabling it to make predictions."
    },
    {
      "term": "PATHWAYS LANGUAGE MODE (PALM)",
      "definition": "PaLM is Google’s transformer-based large language model. It can perform various tasks, including: Commonsense and arithmetic reasoning, Explaining jokes, Generating codes. Also: PaLM is Google's transformer-based LLM, based on similar technology to GPT-3 and GPT-4. The Google Bard chatbot runs on PaLM."
    },
    {
      "term": "PATTERN RECOGNITION",
      "definition": "An area of Machine Learning focusing on the (supervised or unsupervised) recognition of patterns in the data."
    },
    {
      "term": "PERPLEXITY",
      "definition": "Perplexity is a measurement of how unpredictable (perplexing) a text is. A text with high perplexity is more likely to read unnaturally or be nonsensical than a text with low perplexity. AI writing tools tend to produce text with relatively low perplexity, as this gives them a higher chance of making sense."
    },
    {
      "term": "PERSONALLY IDENTIFIABLE INFORMATION",
      "definition": "Any piece of information that can be used on its own or in combination with some other information to identify a particular individual."
    },
    {
      "term": "POOLING (Max Pooling)",
      "definition": "The process of reducing a matrix generated by a convolutional layer to a smaller matrix."
    },
    {
      "term": "PRECISION",
      "definition": "The number of correct positive results is divided by the number of all positive results returned by a classifier."
    },
    {
      "term": "PREDICTION",
      "definition": "The inferred output of a trained model is provided with an input instance."
    },
    {
      "term": "PREDICTIVE AI",
      "definition": "Predictive AI is a method of analyzing data using statistical algorithms to predict upcoming outcomes."
    },
    {
      "term": "PREDICTIVE ANALYTICS",
      "definition": "By combining data mining and machine learning, this type of analytics is built to forecast what will happen within a given timeframe based on historical data and trends."
    },
    {
      "term": "PREPROCESSING",
      "definition": "The process of transforming raw data into a more understandable format."
    },
    {
      "term": "PRE-TRAINED MODEL",
      "definition": "A model, or the component of a model, that has been preliminary trained, generally using another data set. See also: Transfer Learning."
    },
    {
      "term": "PRESCRIPTIVE ANALYTICS",
      "definition": "Prescriptive analytics is a type of data analytics, the use of technology to help businesses make better decisions through the analysis of raw data. Specifically, prescriptive analytics factors information about possible situations or scenarios, available resources, past performance, and current performance, and suggests a course of action or strategy. It can be used to make decisions on any time horizon, from immediate to long term."
    },
    {
      "term": "PRINCIPAL COMPONENT ANALYSIS",
      "definition": "A process that uses an orthogonal transformation to convert a set of observations of possibly correlated variables into a set of linearly uncorrelated variables called principal components."
    },
    {
      "term": "PRIOR",
      "definition": "The probability distribution would represent the preexisting beliefs about a specific quantity before new evidence is considered."
    },
    {
      "term": "PROMPT",
      "definition": "A prompt is a human user’s input to an AI system, which will generate an output or result."
    },
    {
      "term": "PROMPT CHAINING",
      "definition": "An ability of AI to use information from previous interactions to color future responses."
    },
    {
      "term": "PROMPT ENGINEER",
      "definition": "A person that specializes in interacting with Generative AI models in order to generate the best output."
    },
    {
      "term": "PROMPT ENGINEERING",
      "definition": "Prompt engineering is the process of crafting and refining prompts for a generative AI model. AI users utilize prompt engineering to improve the output from the AI model."
    },
    {
      "term": "PYTHON",
      "definition": "A popular programming language used for general programming."
    },
    {
      "term": "PYTORCH",
      "definition": "An open-source machine learning framework developed by Facebook."
    },
    {
      "term": "Q-LEARNING",
      "definition": "Q-learning is a type of reinforcement learning that enables AI models to learn and improve iteratively over time."
    },
    {
      "term": "QUANTUM COMPUTING",
      "definition": "Quantum computing has the potential to dramatically accelerate the evolution of AI."
    },
    {
      "term": "QUILLBOT",
      "definition": "QuillBot is a company known for its powerful paraphrasing tool. It also offers a variety of other AI writing tools (e.g., grammar checker, summarizer) and a plagiarism checker."
    },
    {
      "term": "RANDOM FOREST",
      "definition": "An ensemble learning method that operates by constructing a multitude of decision trees at training time and outputting a combined version (such as the mean or the mode) of the results of each tree."
    },
    {
      "term": "REACTIVE MACHINES",
      "definition": "Reactive machines can analyze, perceive, and make predictions about experiences, but do not store data; they react to situations and act based on the given moment."
    },
    {
      "term": "RECALL",
      "definition": "The fraction of all relevant samples that are correctly classified as positive."
    },
    {
      "term": "RECOMMENDATION ENGINE",
      "definition": "A recommendation engine is an AI algorithm that is used to serve users content based on their preferences. Social sites, such as TikTok, and streaming platforms, such as Spotify and YouTube, use recommendation engines to personalize user feeds."
    },
    {
      "term": "RECOMMENDATION SYSTEM",
      "definition": "AI systems that provide personalized recommendations, often used in e-commerce and content platforms."
    },
    {
      "term": "RECTIFIED LINEAR UNIT",
      "definition": "A unit employing the rectifier function as an activation function."
    },
    {
      "term": "RECURRENT NEURAL NETWORKS",
      "definition": "A class of Artificial Neural Networks where connections between neurons form a directed graph along a sequence, allowing it to exhibit dynamic temporal behavior for a time sequence and to use its internal state (memory) to process sequential signals."
    },
    {
      "term": "REGRESSION (Linear Regression, Logistic Regression)",
      "definition": "A set of statistical processes for estimating the relationships among variables."
    },
    {
      "term": "REGRESSOR",
      "definition": "A feature, is an explanatory variable used as an input to a model."
    },
    {
      "term": "REGULARIZATION",
      "definition": "The process of introducing additional information to prevent overfitting."
    },
    {
      "term": "REINFORCEMENT LEARNING",
      "definition": "The subfield of Machine Learning is inspired by human behaviour studying how an agent should take action in a given environment to maximize some notion of cumulative reward."
    },
    {
      "term": "REINFORCEMENT LEARNING AGENT",
      "definition": "An entity that interacts with an environment and learns to make decisions to maximize a reward."
    },
    {
      "term": "REINFORCEMENT LEARNING FROM HUMAN FEEDBACK (RLHF)",
      "definition": "Reinforcement learning from human feedback (RLHF) is a tactic that trains AI models with direct human feedback. Instead of getting a reward or punishment, the AI models get feedback from humans, typically in the form of ranking the models’ behaviors."
    },
    {
      "term": "REPRODUCIBILITY (CRISIS OF)",
      "definition": "A methodological crisis in science in which scholars have found that the results of many scientific studies are difficult or impossible to replicate or reproduce on subsequent investigation, either by independent researchers or by the original researchers themselves."
    },
    {
      "term": "RESTRICTED BOLTZMANN MACHINES",
      "definition": "A restricted Boltzmann machine (RBM) is a generative stochastic artificial neural network that can learn a probability distribution over its set of inputs."
    },
    {
      "term": "ROBOT",
      "definition": "A robot is a machine that is capable of carrying out actions automatically (sometimes autonomously). Robots usually contain computer systems that are programmed to allow them to carry out their tasks. The study and design of robots is called robotics."
    },
    {
      "term": "ROBOTIC PROCESS AUTOMATION (RPA)",
      "definition": "Uses software with artificial intelligence and machine learning capabilities to perform repetitive tasks once completed by humans."
    },
    {
      "term": "ROBOTICS",
      "definition": "Focused on the design and manufacturing of robots that exhibit and/or replicate human intelligence and actions."
    },
    {
      "term": "SCIKIT-LEARN",
      "definition": "An open-source machine learning library for Python."
    },
    {
      "term": "SEMANTIC ANALYSIS",
      "definition": "A more sophisticated form of Natural Language Processing, this concept is focused on the process of stringing words together as well as the way that language is understood through cultural context. This could function as a help to create eBooks and blog posts, with the potential to replace human writers or content marketers (!)."
    },
    {
      "term": "SEMANTIC ANNOTATION",
      "definition": "Tagging different search queries or products with the goal of improving the relevance of a search engine."
    },
    {
      "term": "SEMI-SUPERVISED LEARNING",
      "definition": "A class of supervised learning techniques that also leverages available unlabeled data for training, typically using a small number of labeled instances in combination with a larger amount of unlabeled rows. See also Supervised Learning and Unsupervised Learning."
    },
    {
      "term": "SENTIMENT ANALYSIS",
      "definition": "The use of natural language processing, text analysis, computational linguistics, and biometrics to systematically identify, extract, quantify, and study affected states and subjective information."
    },
    {
      "term": "SINGULARITY",
      "definition": "In the field of AI, singularity refers to the event where the AI becomes self-aware and starts to evolve on its own out of control."
    },
    {
      "term": "SPEECH RECOGNITION",
      "definition": "The technology that enables machines to transcribe and understand spoken language."
    },
    {
      "term": "STATISTICAL DISTRIBUTION",
      "definition": "In statistics, an empirical distribution function is the distribution function associated with the empirical measure of a sample. This cumulative distribution function is a step function that jumps up by 1/n at each of the n data points. Its value at any specified value of the measured variable is the fraction of observations of the measured variable that are less than or equal to the specified value."
    },
    {
      "term": "STOCHASTIC PARROT",
      "definition": "An analogy of LLMs that illustrates that the software doesn't have a larger understanding of meaning behind language or the world around it, regardless of how convincing the output sounds. The phrase refers to how a parrot can mimic human words without understanding the meaning behind them."
    },
    {
      "term": "STRONG AI",
      "definition": "This field of research is focused on developing AI that is equal to the human mind when it comes to ability. General AI is a similar term often used interchangeably."
    },
    {
      "term": "STRUCTURED DATA",
      "definition": "Data processed in a way that it becomes ingestible by a Machine Learning algorithm and, if in the case of Supervised Machine Learning, labeled data; data after it has been processed on the Appen data annotation platform."
    },
    {
      "term": "STYLE TRANSFER",
      "definition": "The ability to adapt the style of one image to the content of another, allowing an AI to interpret the visual attributes of one image and use it on another. For example, taking the self-portrait of Rembrandt and re-creating it in the style of Picasso."
    },
    {
      "term": "SUPERVISED LEARNING",
      "definition": "The Machine Learning task of learning a function mapping an input to an output based on example input-output pairs."
    },
    {
      "term": "SUPPORT VECTOR MACHINES (SVM)",
      "definition": "A class of discriminative classifiers formally defined by a separating hyperplane, where for each provided labeled training data point, the algorithm outputs an optimal hyperplane that categorizes new examples."
    },
    {
      "term": "SYNTHETIC DATA",
      "definition": "Data is generated artificially when real data cannot be collected in sufficient amounts, or when original data doesn't meet certain requirements."
    },
    {
      "term": "TEMPERATURE",
      "definition": "Parameters set to control how random a language model's output is. A higher temperature means the model takes more risks."
    },
    {
      "term": "TENSORFLOW",
      "definition": "An open-source library, popular among the Machine Learning community, for data flow programming across a range of tasks. It is a symbolic math library and is also used for machine learning applications such as neural networks."
    },
    {
      "term": "TEST DATA",
      "definition": "The unlabeled data is used to check that a machine learning model is able to perform its assigned task."
    },
    {
      "term": "TEST SET",
      "definition": "Subset of data used to evaluate the final model's performance."
    },
    {
      "term": "TESTING (Testing Data)",
      "definition": "In the context of Supervised Machine Learning, the process of assessing the final performance of a model using hold-out data."
    },
    {
      "term": "TEXT-TO-IMAGE GENERATION",
      "definition": "Creating images based on textual descriptions."
    },
    {
      "term": "TECHNOLOGICAL SINGULARITY",
      "definition": "The singularity describes a point in the future where advanced AI becomes more intelligent than humans and technological growth becomes uncontrollable."
    },
    {
      "term": "TIME SERIES (Time Series Data)",
      "definition": "A sequence of data points is recorded at specific times and indexed accordingly to their order of occurrence."
    },
    {
      "term": "TOKEN",
      "definition": "A token is the basic unit of text that an LLM uses to understand and generate language. It may be a word or parts of a word. Paid LLMs, such as GPT-4's API, charge users by token."
    },
    {
      "term": "TOPIC MODELING",
      "definition": "A category of Unsupervised Machine Learning algorithms that uses clustering to find hidden structures in textual data, and interpret them as topics."
    },
    {
      "term": "TRAINING DATA",
      "definition": "In the context of Supervised Machine Learning, the construction of algorithms that can learn from and make predictions from data."
    },
    {
      "term": "TRAINING SET",
      "definition": "Subset of data used to train a model."
    },
    {
      "term": "TRANSFORMER",
      "definition": "A type of neural network architecture used for natural language processing. It's the T in GPT."
    },
    {
      "term": "TRANSFORMER MODEL",
      "definition": "A neural network architecture and deep learning model that learns context by tracking relationships in data, like in sentences or parts of images. So, instead of analyzing a sentence one word at a time, it can look at the whole sentence and understand the context."
    },
    {
      "term": "TRANSFER LEARNING",
      "definition": "An area of Machine Learning that focuses on using knowledge gained to solve a specific problem and apply this knowledge to a different but related problem."
    },
    {
      "term": "TURING TEST",
      "definition": "A test developed by Alan Turing to evaluate a machine's ability to exhibit intelligent behavior equivalent to that of a human. The test consists in having the machine chat with a human. If a human evaluator witnessing the conversation from outside the room where the test takes place can't reliably tell the machine from the human apart, the machine is said to have passed the Turing test."
    },
    {
      "term": "UNCERTAINTY",
      "definition": "A range of values is likely to enclose the true value."
    },
    {
      "term": "UNDERFITTING",
      "definition": "The fact that a Machine Learning algorithm fails to capture the underlying structure of the data properly, typically because the model is either not sophisticated enough, or not appropriate for the task at hand; the opposite of Overfitting."
    },
    {
      "term": "UNSTRUCTURED DATA",
      "definition": "Raw, unprocessed data. Textual data is a perfect example of unstructured data because it is not formatted into specific features."
    },
    {
      "term": "UNSUPERVISED LEARNING",
      "definition": "The area of Machine Learning consists in inferring a function that describes the structure of unlabeled data."
    },
    {
      "term": "VALIDATION",
      "definition": "The process of using hold-out data to evaluate the performance of a trained model; by opposition to the testing phase which is used for the final assessment of the model's performance, the validation phase is used to determine if any iterative modification needs to be made to the model."
    },
    {
      "term": "VALIDATION DATA",
      "definition": "Structured like training data with input and labels, this data is used to test a recently trained model against new data and to analyze performance, with a particular focus on checking for overfitting."
    },
    {
      "term": "VALIDATION SET",
      "definition": "Subset of data used to tune hyperparameters and model choices."
    },
    {
      "term": "VANISHING/EXPLODING GRADIENTS",
      "definition": "A dreaded difficulty and a major obstacle to recurrent net performance that data scientists face when training Artificial Neural Networks with gradient-based learning methods and back propagation, due to the neural network's weights receiving an update proportional to the partial derivative of the error function concerning the current weight in each iteration of training."
    },
    {
      "term": "VARIANCE",
      "definition": "An error due to sensitivity to small fluctuations in the training set is computed as the expectation of the squared deviation of a random variable from its mean."
    },
    {
      "term": "VARIATIONAL AUTOENCODER",
      "definition": "Variational autoencoders are a generative AI model architecture commonly used for signal analysis and finding efficient coding of input data. They are comparable to GANs in that they pit two neural networks against each other -- an encoder and a decoder."
    },
    {
      "term": "VARIATION",
      "definition": "Also called queries or utterances, these work in tandem with intents for natural language processing. Variation is what a person might say to achieve a certain purpose or goal. For example, if the intent is \"pay by credit card,\" the variation might be \"I'd like to pay by card, please.\"."
    },
    {
      "term": "VOICE RECOGNITION",
      "definition": "The ability of a computer to recognize and respond to spoken commands."
    },
    {
      "term": "WEAK AI",
      "definition": "Also called narrow AI, this is a model that has a set range of skills and focuses on one particular set of tasks. Most AI currently in use is weak AI, unable to learn or perform tasks outside of its specialist skill set. Also: AI that's focused on a particular task and can't learn beyond its skill set. Most of today's AI is weak AI."
    },
    {
      "term": "WEAK SUPERVISION",
      "definition": "Weak Supervision is a form of AI training that uses noisy data."
    },
    {
      "term": "WHISPER",
      "definition": "In AI speak, Whisper is a multilingual automatic speech recognition tool developed and launched by OpenAI in 2022. It can recognize speech in different languages, identify a language, and translate speech into another language."
    },
    {
      "term": "YIELD OPTIMIZATION",
      "definition": "Maximizing the output of a process while minimizing the resources used."
    },
    {
      "term": "ZERO SHOT LEARNING",
      "definition": "Zero Shot Learning is a type of AI that can learn without any labeled data."
    }
  ] 

  return (
    <main>
      <section className="hero-small">
        <div className="container">
          <h1>📚 AI Glossary</h1>
          <p>Explore essential AI and technology terms with detailed definitions.</p>
        </div>
      </section>
      <section className="glossary-section section-padding">
        <div className="container">
          <div className="glossary-grid">
            {glossaryTerms.map((item, index) => (
              <div key={index} className="term-card">
                <h3>{item.term}</h3>
                <p>{item.definition}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default AIGlossary