class Emotion {
    constructor(name, oppositeName, translations, definition, children, pnasImage, meme) {
        this.name = name;
        this.oppositeName = oppositeName;
        this.translations = translations;
        this.definition = definition;
        this.children = children;
        this.pnasImage = pnasImage;
        this.meme = meme;
    }
}

// Anger outer layer emotions
const embarrassed = new Emotion('Embarrassed', '?', ['Cringe', '?'], 'feeling ashamed or shy', [], 'anger.png', 'anger.gif');
const devastated = new Emotion('Devastated', '?', ['Gutted', 'Dismayed'], 'very shocked and upset', [], 'anger.png', 'anger.gif');
const insecure = new Emotion('Insecure', '?', ['?', '?'], 'lacking confidence and doubting their own abilities', [], 'anger.png', 'anger.gif');
const jealous = new Emotion('Jealous', 'Admiration', ['?', '?'], 'unhappy and angry because someone has something that you want', [], 'anger.png', 'anger.gif');
const resentful = new Emotion('Resentful', '?', ['?', '?'], 'feeling angry because you have been forced to accept someone or something that you do not like', [], 'anger.png', 'anger.gif');
const violated = new Emotion('Violated', '?', ['?', '?'], 'feeling or showing violation', [], 'anger.png', 'anger.gif');
const furious = new Emotion('Furious', '?', ['?', '?'], 'very angry', [], 'anger.png', 'anger.gif');
const enraged = new Emotion('Enraged', '?', ['?', '?'], 'very angry', [], 'anger.png', 'anger.gif');
const provoked = new Emotion('Provoked', '?', ['?', '?'], 'feeling or showing provocation', [], 'anger.png', 'anger.gif');
const hostile = new Emotion('Hostile', '?', ['?', '?'], 'feeling or showing hostility', [], 'anger.png', 'anger.gif');
const infuriated = new Emotion('Infuriated', '?', ['?', '?'], 'feeling or showing infuriation', [], 'anger.png', 'anger.gif');
const irritated = new Emotion('Irritated', '?', ['?', '?'], 'feeling or showing irritation', [], 'anger.png', 'anger.gif');
const withdrawn = new Emotion('Withdrawn', '?', ['?', '?'], 'feeling or showing withdrawal', [], 'anger.png', 'anger.gif');
const suspicious = new Emotion('Suspicious', '?', ['?', '?'], 'feeling or showing suspicion', [], 'anger.png', 'anger.gif');
const skeptical = new Emotion('Skeptical', '?', ['?', '?'], 'feeling or showing skepticism', [], 'anger.png', 'anger.gif');
const sarcastic = new Emotion('Sarcastic', '?', ['?', '?'], 'feeling or showing sarcasm', [], 'anger.png', 'anger.gif');

// Anger middle layer emotions
const critical = new Emotion('Critical', '?', ['?', '?'], 'feeling or showing criticism', [skeptical, sarcastic], 'anger.png', 'anger.gif');
const distant = new Emotion('Distant', '?', ['?', '?'], 'feeling or showing distance', [withdrawn, suspicious], 'anger.png', 'anger.gif');
const frustrated = new Emotion('Frustrated', '?', ['?', '?'], 'feeling or showing frustration', [infuriated, irritated], 'anger.png', 'anger.gif');
const aggressive = new Emotion('Aggressive', '?', ['?', '?'], 'feeling or showing aggression', [provoked, hostile], 'anger.png', 'anger.gif');
const mad = new Emotion('Mad', '?', ['?', '?'], 'feeling or showing madness', [furious, enraged], 'anger.png', 'anger.gif');
const hateful = new Emotion('Hateful', '?', ['?', '?'], 'feeling or showing hate', [violated, resentful], 'anger.png', 'anger.gif');
const threatened = new Emotion('Threatened', '?', ['?', '?'], 'feeling or showing threat', [jealous, insecure], 'anger.png', 'anger.gif');
const hurt = new Emotion('Hurt', '?', ['?', '?'], 'feeling or showing hurt', [devastated, embarrassed], 'anger.png', 'anger.gif');

// Anger inner layer emotions
const anger = new Emotion(
    'Anger',
    '?',
    ['Anger', 'Wrath', 'Rage', 'Pissed'],
    'a strong feeling that makes you want to hurt someone or be unpleasant because of something unfair or unkind that has happened',
    [hurt, threatened, hateful, mad, aggressive, frustrated, distant, critical],
    'anger.png',
    'anger.gif'
);

// Disgust outer layer emotions
const judgemental = new Emotion('Judgemental', '', ['?', '?'], 'feeling or showing judgement', [], 'disgust.png', 'disgust.gif');
const loathing = new Emotion('Loathing', '', ['?', '?'], 'feeling or showing loathing', [], 'disgust.png', 'disgust.gif');
const repugnant = new Emotion('Repugnant', '', ['?', '?'], 'feeling or showing repugnance', [], 'disappointed.png', 'disgust.gif');
const revolted = new Emotion('Revolted', '', ['?', '?'], 'feeling or showing revolt', [], 'disappointed.png', 'disgust.gif');
const revulsion = new Emotion('Revulsion', '', ['?', '?'], 'feeling or showing revulsion', [], 'disgust.png', 'disgust.gif');
const detestable = new Emotion('Detestable', '', ['?', '?'], 'feeling or showing detestation', [], 'disgust.png', 'disgust.gif');
const aversion = new Emotion('Aversion', '', ['?', '?'], 'feeling or showing aversion', [], 'disgust.png', 'disgust.gif');
const hesitant = new Emotion('Hesitant', '', ['?', '?'], 'feeling or showing hesitation', [], 'disgust.png', 'disgust.gif');

// Disgust middle layer emotions
const disapproval = new Emotion('Disapproval', '', ['?', '?'], 'feeling or showing disapproval', [judgemental, loathing], 'disgust.png', 'disgust.gif');
const disappointed = new Emotion('Disappointed', '', ['?', '?'], 'feeling or showing disappointment', [repugnant, revolted], 'disappointed.png', 'disgust.gif');
const awful = new Emotion('Awful', '', ['?', '?'], 'feeling or showing awfulness', [revulsion, detestable], 'disgust.png', 'disgust.gif');
const avoidance = new Emotion('Avoidance', '', ['?', '?'], 'feeling or showing avoidance', [aversion, hesitant], 'disgust.png', 'disgust.gif');

// Disgust inner layer emotions
const disgust = new Emotion(
    'Disgust',
    '?',
    ['?', '?'],
    'feeling or showing disgust',
    [disapproval, disappointed, awful, avoidance],
    'disgust.png',
    'disgust.gif'
);

// Sad outer layer emotions
const remorseful = new Emotion('Remorseful', '?', ['?', '?'], 'feeling or showing remorse', [], 'guilt.png', 'sad.gif');
const ashamed = new Emotion('Ashamed', '?', ['?', '?'], 'feeling or showing shame', [], 'ashamed.png', 'sad.gif');
const ignored = new Emotion('Ignored', '?', ['?', '?'], 'feeling or showing ignorance', [], 'sad.png', 'sad.gif');
const victimized = new Emotion('Victimized', '?', ['?', '?'], 'feeling or showing victimization', [], 'sad.png', 'sad.gif');
const powerless = new Emotion('Powerless', '?', ['?', '?'], 'feeling or showing powerlessness', [], 'despair.png', 'sad.gif');
const vulnerable = new Emotion('Vulnerable', '?', ['?', '?'], 'feeling or showing vulnerability', [], 'despair.png', 'sad.gif');
const inferiorEmotion = new Emotion('Inferior', '?', ['?', '?'], 'feeling or showing inferiority', [], 'depressed.png', 'sad.gif');
const empty = new Emotion('Empty', '?', ['?', '?'], 'feeling or showing emptiness', [], 'depressed.png', 'sad.gif');
const abandonedUnderLonely = new Emotion('Abandoned', '?', ['?', '?'], 'feeling or showing abandonment', [], 'lonely.png', 'sad.gif');
const isolated = new Emotion('Isolated', '?', ['?', '?'], 'feeling or showing isolation', [], 'lonely.png', 'sad.gif');
const apathetic = new Emotion('Apathetic', '?', ['?', '?'], 'feeling or showing apathy', [], 'sad.png', 'sad.gif');
const indifferent = new Emotion('Indifferent', '?', ['?', '?'], 'feeling or showing indifference', [], 'sad.png', 'sad.gif');

// Sad middle layer emotions
const guilty = new Emotion('Guilty', '?', ['?', '?'], 'feeling or showing guilt', [remorseful, ashamed], 'guilt.png', 'sad.gif');
const abandonedUnderSad = new Emotion('Abandoned', '?', ['?', '?'], 'feeling or showing abandonment', [ignored, victimized], 'sad.png', 'sad.gif');
const despair = new Emotion('Despair', '?', ['?', '?'], 'feeling or showing despair', [powerless, vulnerable], 'despair.png', 'sad.gif');
const depressed = new Emotion('Depressed', '?', ['?', '?'], 'feeling or showing depression', [inferiorEmotion, empty], 'depressed.png', 'sad.gif');
const lonely = new Emotion('Lonely', '?', ['?', '?'], 'feeling or showing loneliness', [abandonedUnderLonely, isolated], 'lonely.png', 'sad.gif');
const bored = new Emotion('Bored', '?', ['?', '?'], 'feeling or showing boredom', [apathetic, indifferent], 'sad.png', 'sad.gif');

// Sad inner layer emotions
const sad = new Emotion(
    'Sad',
    '?',
    ['?', '?'],
    'feeling or showing sadness',
    [guilty, abandonedUnderSad, despair, depressed, lonely, bored],
    'sad.png',
    'sad.gif'
);

// Happy outer layer emotions
const inspired = new Emotion('Inspired', '?', ['?', '?'], 'feeling or showing inspiration', [], 'happy.png', 'happy.gif');
const openEmotion = new Emotion('Open', '?', ['?', '?'], 'feeling or showing openness', [], 'happy.png', 'happy.gif');
const playful = new Emotion('Playful', '?', ['?', '?'], 'feeling or showing playfulness', [], 'happy.png', 'happy.gif');
const sensitive = new Emotion('Sensitive', '?', ['?', '?'], 'feeling or showing sensitivity', [], 'happy.png', 'happy.gif');
const hopeful = new Emotion('Hopeful', '?', ['?', '?'], 'feeling or showing hope', [], 'happy.png', 'happy.gif');
const loving = new Emotion('Loving', '?', ['?', '?'], 'feeling or showing love', [], 'loving.png', 'happy.gif');
const provocative = new Emotion('Provocative', '?', ['?', '?'], 'feeling or showing provocation', [], 'happy.png', 'happy.gif');
const courageous = new Emotion('Courageous', '?', ['?', '?'], 'feeling or showing courage', [], 'happy.png', 'happy.gif');
const respected = new Emotion('Respected', '?', ['?', '?'], 'feeling or showing respect', [], 'happy.png', 'happy.gif');
const fulfilled = new Emotion('Fulfilled', '?', ['?', '?'], 'feeling or showing fulfillment', [], 'happy.png', 'happy.gif');
const important = new Emotion('Important', '?', ['?', '?'], 'feeling or showing importance', [], 'proud.png', 'happy.gif');
const confident = new Emotion('Confident', '?', ['?', '?'], 'feeling or showing confidence', [], 'proud.png', 'happy.gif');
const amused = new Emotion('Amused', '?', ['?', '?'], 'feeling or showing amusement', [], 'happy.png', 'happy.gif');
const inquisitive = new Emotion('Inquisitive', '?', ['?', '?'], 'feeling or showing inquisition', [], 'happy.png', 'happy.gif');
const ecstatic = new Emotion('Ecstatic', '?', ['?', '?'], 'feeling or showing ecstasy', [], 'happy.png', 'happy.gif');
const liberated = new Emotion('Liberated', '?', ['?', '?'], 'feeling or showing liberation', [], 'happy.png', 'happy.gif');

// Happy middle layer emotions
const optimistic = new Emotion('Optimistic', '?', ['?', '?'], 'feeling or showing optimism', [inspired, openEmotion], 'happy.png', 'happy.gif');
const intimate = new Emotion('Intimate', '?', ['?', '?'], 'feeling or showing intimacy', [playful, sensitive], 'happy.png', 'happy.gif');
const peaceful = new Emotion('Peaceful', '?', ['?', '?'], 'feeling or showing peace', [hopeful, loving], 'happy.png', 'happy.gif');
const powerful = new Emotion('Powerful', '?', ['?', '?'], 'feeling or showing power', [provocative, courageous], 'happy.png', 'happy.gif');
const accepted = new Emotion('Accepted', '?', ['?', '?'], 'feeling or showing acceptance', [respected, fulfilled], 'happy.png', 'happy.gif');
const proud = new Emotion('Proud', '?', ['?', '?'], 'feeling or showing pride', [important, confident], 'proud.png', 'happy.gif');
const interested = new Emotion('Interested', '?', ['?', '?'], 'feeling or showing interest', [amused, inquisitive], 'happy.png', 'happy.gif');
const joyful = new Emotion('Joyful', '?', ['?', '?'], 'feeling or showing joy', [ecstatic, liberated], 'happy.png', 'happy.gif');

// Happy inner layer emotions
const happy = new Emotion(
    'Happy',
    '?',
    ['?', '?'],
    'feeling or showing happiness',
    [optimistic, intimate, peaceful, powerful, accepted, proud, interested, joyful],
    'happy.png',
    'happy.gif'
);

// Surprise outer layer emotions
const energetic = new Emotion('Energetic', '?', ['?', '?'], 'feeling or showing energy', [], 'surprise.png', 'surprised.gif');
const eager = new Emotion('Eager', '?', ['?', '?'], 'feeling or showing eagerness', [], 'surprise.png', 'surprised.gif');
const awe = new Emotion('Awe', '?', ['?', '?'], 'feeling or showing awe', [], 'surprise.png', 'surprised.gif');
const astonished = new Emotion('Astonished', '?', ['?', '?'], 'feeling or showing astonishment', [], 'surprise.png', 'surprised.gif');
const perplexed = new Emotion('Perplexed', '?', ['?', '?'], 'feeling or showing perplexity', [], 'surprise.png', 'surprised.gif');
const disillusioned = new Emotion('Disillusioned', '?', ['?', '?'], 'feeling or showing disillusionment', [], 'surprise.png', 'surprised.gif');
const dismayed = new Emotion('Dismayed', '?', ['?', '?'], 'feeling or showing dismay', [], 'surprise.png', 'surprised.gif');
const shocked = new Emotion('Shocked', '?', ['?', '?'], 'feeling or showing shock', [], 'surprise.png', 'surprised.gif');

// Surprise middle layer emotions
const excited = new Emotion('Excited', '?', ['?', '?'], 'feeling or showing excitement', [energetic, eager], 'surprise.png', 'surprised.gif');
const amazed = new Emotion('Amazed', '?', ['?', '?'], 'feeling or showing amazement', [awe, astonished], 'surprise.png', 'surprised.gif');
const confused = new Emotion('Confused', '?', ['?', '?'], 'feeling or showing confusion', [perplexed, disillusioned], 'surprise.png', 'surprised.gif');
const startled = new Emotion('Startled', '?', ['?', '?'], 'feeling or showing startle', [dismayed, shocked], 'surprise.png', 'surprised.gif');

// Surprise inner layer emotions
const surprise = new Emotion(
    'Surprise',
    '?',
    ['?', '?'],
    'feeling or showing surprise',
    [excited, amazed, confused, startled],
    'surprise.png',
    'surprised.gif'
);

// Fear outer layer emotions
const terrified = new Emotion('Terrified', '?', ['?', '?'], 'feeling or showing terror', [], 'fear.png', 'fear.gif');
const frightened = new Emotion('Frightened', '?', ['?', '?'], 'feeling or showing fright', [], 'fear.png', 'fear.gif');
const overwhelmed = new Emotion('Overwhelmed', '?', ['?', '?'], 'feeling or showing overwhelm', [], 'anxious.png', 'fear.gif');
const worried = new Emotion('Worried', '?', ['?', '?'], 'feeling or showing worry', [], 'anxious.png', 'fear.gif');
const inadequateUnderRejected = new Emotion('Inadequate', '', ['?', '?'], 'feeling or showing inadequacy', [], 'fear.png', 'fear.gif');
const inferior = new Emotion('Inferior', '?', ['?', '?'], 'feeling or showing inferiority', [], 'fear.png', 'fear.gif');
const worthless = new Emotion('Worthless', '?', ['?', '?'], 'feeling or showing worthlessness', [], 'fear.png', 'fear.gif');
const insignificant = new Emotion('Insignificant', '?', ['?', '?'], 'feeling or showing insignificance', [], 'fear.png', 'fear.gif');
const inadequateUnderInsecure = new Emotion('Inadequate', '?', ['?', '?'], 'feeling or showing inadequacy', [], 'fear.png', 'fear.gif');
const alienated = new Emotion('Alienated', '?', ['?', '?'], 'feeling or showing alienation', [], 'fear.png', 'fear.gif');
const disrespected = new Emotion('Disrespected', '?', ['?', '?'], 'feeling or showing disrespect', [], 'fear.png', 'fear.gif');
const ridiculed = new Emotion('Ridiculed', '?', ['?', '?'], 'feeling or showing ridicule', [], 'fear.png', 'fear.gif');

// Fear middle layer emotions
const scared = new Emotion('Scared', '?', ['?', '?'], 'feeling or showing scare', [terrified, frightened], 'fear.png', 'fear.gif');
const anxious = new Emotion('Anxious', '?', ['?', '?'], 'feeling or showing anxiety', [overwhelmed, worried], 'anxious.png', 'fear.gif');
const insecureUnderFear = new Emotion('Insecure', '', ['Need to be in control', '?'], 'feeling or showing insecurity', [inadequateUnderInsecure, inferior], 'fear.png', 'fear.gif');
const submissive = new Emotion('Submissive', '?', ['?', '?'], 'feeling or showing submission', [worthless, insignificant], 'fear.png', 'fear.gif');
const rejected = new Emotion('Rejected', '?', ['?', '?'], 'feeling or showing rejection', [inadequateUnderRejected, alienated], 'fear.png', 'fear.gif');
const humiliated = new Emotion('Humiliated', '?', ['?', '?'], 'feeling or showing humiliation', [disrespected, ridiculed], 'fear.png', 'fear.gif');

// Fear inner layer emotions
const fear = new Emotion(
    'Fear',
    '?',
    ['?', '?'],
    'feeling or showing fear',
    [scared, anxious, insecureUnderFear, submissive, rejected, humiliated],
    'fear.png',
    'fear.gif'
);

const innerEmotions = [anger, disgust, surprise, happy, sad, fear];

// the last color is for when a wedge is hovered over
const standardWedgeColors = ['#ff595e', '#ff924c', '#ffca3a', '#8ac926', '#1982c4', '#6a4c93', 'red'];
const darkColors = ['#126782', '#219ebc', '#8ecae6', '#fb8500', '#ffb703', '#023047', 'red'];
const oppositeColors = ['#e63946', '#f1faee', '#a8dadc', '#457b9d', '#1d3557', '#4a5d79', 'orange'];

let colorTheme = standardWedgeColors;
let wheelType = 'standard';

const canvas = document.getElementById('wheelCanvas');
const ctx = canvas.getContext('2d');
// Get the computed style of the canvas element
const canvasStyles = getComputedStyle(canvas);

// Set the canvas width and height based on the computed CSS values
canvas.width = parseInt(canvasStyles.width);
canvas.height = parseInt(canvasStyles.height);

let centerX = canvas.width / 2;
let centerY = canvas.height / 2;


// For hover events
let highlightedWedge = null;
let wedges = [];

// Count the number of emotions in each layer
const numInnerEmotions = innerEmotions.length;
let middleEmotionCounter = 0;
let outerEmotionCounter = 0;
for (let i = 0; i < numInnerEmotions; i++) {
    let innerEmotion = innerEmotions[i];

    middleEmotionCounter = middleEmotionCounter + innerEmotion.children.length;

    for (let j = 0; j < innerEmotion.children.length; j++) {

        let middleEmotion = innerEmotion.children[j];
        outerEmotionCounter = outerEmotionCounter + middleEmotion.children.length;
    }
}

const numMiddleEmotions = middleEmotionCounter;
const numOuterEmotions = outerEmotionCounter;

// Define dimensions for each layer
const borderWidth = 7;
let lineWidth = canvas.width / 8;
let centerPadding = canvas.width / 50;
let outerRing1Radius = 2 * lineWidth + centerPadding + 0.5 * borderWidth;
let outerRing2Radius = 3 * lineWidth + centerPadding + borderWidth;
let circleRadius = lineWidth + centerPadding;

// Function to draw an arc with text
function drawArcWithText(emotion, startAngle, endAngle, radius, index, lineWidth, text, storeWedge = false) {
    // Create gradient
    let gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 10 * radius);
    gradient.addColorStop(0, colorTheme[index]); // Start color
    gradient.addColorStop(1, 'white'); // End color

    // Draw border
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, startAngle - 0.001, endAngle + 0.001);
    ctx.lineWidth = lineWidth + borderWidth;
    ctx.strokeStyle = 'black';
    ctx.stroke();

    // Draw the arc
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = gradient;
    ctx.stroke();

    // Move to the center of the arc for text placement
    ctx.save();

    const angle = (startAngle + endAngle) / 2;
    ctx.translate(centerX, centerY);
    ctx.rotate(angle);

    // Calculate the position to center the text within the wedge
    const textX = radius;
    const textY = 0;

    // Rotate text in left half of the circle by 180 degrees so it's not upside down
    if (angle > (Math.PI / 2) && angle < (Math.PI * 3 / 2)) {
        ctx.save();
        ctx.translate(textX, textY);
        ctx.rotate(Math.PI);
        ctx.translate(-textX, -textY);
    }

    // Scale text to fit inside the wedge
    const maxTextWidth = radius * 0.8; // Adjust the factor as needed
    ctx.font = `bold ${canvas.width / 1000}rem 'Arial'`;

    // Draw the text
    ctx.fillStyle = 'black'; // Set text color to black
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, textX, textY);

    if (angle > (Math.PI / 2) && angle < (Math.PI * 3 / 2)) {
        ctx.restore();
    }

    ctx.restore(); // Restore the original context state

    if (storeWedge) {
        // Store the wedge data
        let wedge = {
            wedgeEmotion: emotion,
            startAngle: startAngle,
            endAngle: endAngle,
            radius: radius,
            wedgeIndex: index,
            lineWidth: lineWidth,
            text: text
        };
        wedges.push(wedge);
    }
}

function drawEmotionWheel() {
    // Draw outer ring of child emotions
    let outerEmotionIndex = 0;
    let middleEmotionIndex = 0;
    let innerEmotionIndex = 0;
    let emotionName = '';

    for (let i = 0; i < numInnerEmotions; i++) {
        let innerEmotion = innerEmotions[i];
        let numOuterChildren = 0;
        for (let j = 0; j < innerEmotion.children.length; j++) {
            let middleEmotion = innerEmotion.children[j];

            for (let k = 0; k < middleEmotion.children.length; k++) {
                let outerEmotion = middleEmotion.children[k];

                // Draw outer ring
                const startAngle = (outerEmotionIndex * (2 * Math.PI)) / numOuterEmotions;
                const endAngle = ((outerEmotionIndex + 1) * (2 * Math.PI)) / numOuterEmotions;

                if (wheelType === 'standard') {
                    emotionName = outerEmotion.name;
                }
                else if (wheelType === 'male') {
                    emotionName = outerEmotion.translations[0];
                }
                else if (wheelType === 'opposites') {
                    emotionName = outerEmotion.name;
                }

                drawArcWithText(outerEmotion, startAngle, endAngle, outerRing2Radius, i, lineWidth, emotionName, true);
                outerEmotionIndex = outerEmotionIndex + 1;

                numOuterChildren = numOuterChildren + 1;
            }

            // Draw the middle ring
            const startAngle = (middleEmotionIndex * (2 * Math.PI)) / numMiddleEmotions;
            const endAngle = ((middleEmotionIndex + 1) * (2 * Math.PI)) / numMiddleEmotions;

            if (wheelType === 'standard') {
                emotionName = middleEmotion.name;
            }
            else if (wheelType === 'male') {
                emotionName = middleEmotion.translations[0];
            }
            else if (wheelType === 'opposites') {
                emotionName = middleEmotion.name;
            }
            drawArcWithText(middleEmotion, startAngle, endAngle, outerRing1Radius, i, lineWidth, emotionName, true);

            middleEmotionIndex = middleEmotionIndex + 1;
        }

        // Draw the inner circle with a size based on numOuterChildren
        const startAngle = (innerEmotionIndex * (2 * Math.PI)) / numOuterEmotions;
        const endAngle = ((innerEmotionIndex + numOuterChildren) * (2 * Math.PI)) / numOuterEmotions;

        innerEmotionIndex = innerEmotionIndex + numOuterChildren;

        if (wheelType === 'standard') {
            emotionName = innerEmotion.name;
        }
        else if (wheelType === 'male') {
            emotionName = innerEmotion.translations[0];
        }
        else if (wheelType === 'opposites') {
            emotionName = innerEmotion.name;
        }

        drawArcWithText(innerEmotion, startAngle, endAngle, circleRadius, i, lineWidth, emotionName, true);
    }
}

// Redraw the emotion wheel when the window is resized
window.addEventListener('resize', function () {
    wedges = [];

    // Update the canvas drawing surface size to match the new display size
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;

    // Update the center of the wheel to be the center of the new canvas size
    centerX = canvas.width / 2;
    centerY = canvas.height / 2;

    // Update the dimensions of the emotion wheel
    lineWidth = canvas.width / 8;
    centerPadding = canvas.width / 50;
    outerRing1Radius = 2 * lineWidth + centerPadding + 0.5 * borderWidth;
    outerRing2Radius = 3 * lineWidth + centerPadding + borderWidth;
    circleRadius = lineWidth + centerPadding;

    // Redraw the emotion wheel
    drawEmotionWheel();
});

// Highlight wedges on hover
canvas.addEventListener('mousemove', function (event) {
    let x = event.clientX - canvas.getBoundingClientRect().left;
    let y = event.clientY - canvas.getBoundingClientRect().top;
    let angle = Math.atan2(y - centerY, x - centerX);
    if (angle < 0) {
        angle += 2 * Math.PI;
    }

    let distance = Math.hypot(x - centerX, y - centerY);

    let newHighlightedWedge = null;
    for (let wedge of wedges) {
        if (angle >= wedge.startAngle && angle <= wedge.endAngle && distance <= wedge.radius + wedge.lineWidth / 2 && distance >= wedge.radius - wedge.lineWidth / 2) {
            newHighlightedWedge = wedge;
            break;
        }
    }

    // Only redraw the wedge if the highlighted wedge has changed
    if (newHighlightedWedge !== highlightedWedge) {
        if (highlightedWedge) {
            // Update the color of the old highlighted wedge and redraw it
            highlightedWedge.color = highlightedWedge.originalColor;

            // Update emotion details
            if (wheelType === 'standard') {
                highlightedWedge.text = highlightedWedge.wedgeEmotion.name;
            }
            else if (wheelType === 'male') {
                highlightedWedge.text = highlightedWedge.wedgeEmotion.translations[0];
            }
            else if (wheelType === 'opposites') {
                highlightedWedge.text = highlightedWedge.wedgeEmotion.name;
            }

            drawArcWithText(
                highlightedWedge.wedgeEmotion,
                highlightedWedge.startAngle,
                highlightedWedge.endAngle,
                highlightedWedge.radius,
                highlightedWedge.wedgeIndex,
                highlightedWedge.lineWidth,
                highlightedWedge.text
            );

            // Update emotion details
            document.getElementById('emotion-name').innerHTML
                = newHighlightedWedge.text;
            document.getElementById('emotion-description').innerHTML
                = newHighlightedWedge.wedgeEmotion.definition;
            document.getElementById('pnas-image').src
                = 'images/' + newHighlightedWedge.wedgeEmotion.pnasImage;
            document.getElementById('meme').src
                = 'memes/' + newHighlightedWedge.wedgeEmotion.meme;
        }

        highlightedWedge = newHighlightedWedge;

        if (highlightedWedge) {
            if (wheelType === 'standard') {
                highlightedWedge.text = highlightedWedge.wedgeEmotion.name;
            }
            else if (wheelType === 'male') {
                highlightedWedge.text = highlightedWedge.wedgeEmotion.name;
            }
            else if (wheelType === 'opposites') {
                highlightedWedge.text = highlightedWedge.wedgeEmotion.oppositeName;
            }

            highlightedWedge.color = 'red';
            drawArcWithText(
                highlightedWedge.wedgeEmotion,
                highlightedWedge.startAngle,
                highlightedWedge.endAngle,
                highlightedWedge.radius,
                colorTheme.length - 1,
                highlightedWedge.lineWidth,
                highlightedWedge.text
            );
        }
    }

});

function showStandardWheel() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);  // clear canvas
    wheelType = 'standard';
    colorTheme = standardWedgeColors;
    drawEmotionWheel();
}

function showMaleWheel() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);  // clear canvas
    wheelType = 'male';
    colorTheme = darkColors;
    drawEmotionWheel();
}

function showOppositesWheel() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);  // clear canvas
    wheelType = 'opposites';
    colorTheme = oppositeColors;
    drawEmotionWheel();
}

document.getElementById('button-wheel-standard').addEventListener('click', showStandardWheel);
document.getElementById('button-wheel-male').addEventListener('click', showMaleWheel);
document.getElementById('button-wheel-opposites').addEventListener('click', showOppositesWheel);

showStandardWheel();
