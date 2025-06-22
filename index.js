const tempoSignatures = {
  '3/4': 3,
  '4/4': 4,
  '6/8': 6,
  '8/4': 8,
};

let sourceBpm = 76;
let sourceTempoSignature = '3/4';
let targetTempoSignature = '3/4';

function setSourceBpm() {
  sourceBpm = document.getElementById('sourceBpm').value;
  setTargetBpm();
}

function setSourceTempoSignature(signature, button) {
  sourceTempoSignature = signature;

  const buttons = button.parentNode.querySelectorAll('.time-signature-btn');
  buttons.forEach((btn) => btn.classList.remove('active-blue'));

  button.classList.add('active-blue');

  setTargetBpm();
}

function setTargetTempoSignature(signature, button) {
  targetTempoSignature = signature;

  const buttons = button.parentNode.querySelectorAll('.time-signature-btn');
  buttons.forEach((btn) => btn.classList.remove('active-purple'));

  button.classList.add('active-purple');
  setTargetBpm();
}

function setTargetBpm() {
  console.log('AAAa');
  document.getElementById('targetBpm').value = getBpmFromTempo(
    sourceBpm,
    sourceTempoSignature,
    targetTempoSignature
  );
}

function getBpmFromTempo(
  sourceBpm = 60,
  sourceTempoSignature = '4/4',
  targetTempoSignature = '6/8'
) {
  const bpm =
    (sourceBpm / tempoSignatures[sourceTempoSignature]) *
    tempoSignatures[targetTempoSignature];

  return bpm % 1 !== 0 ? bpm.toFixed(1) : bpm;
}

function metronome(bpm = 60, tempoSignature = '4/4') {
  let tempo = 1;
  setInterval(() => {
    console.log(tempo);
    tempo++;
    if (tempo > tempoSignature) {
      //console.log('-----');
      tempo = 1;
    }
  }, translateBpmToInterval(bpm));
}

function translateBpmToInterval(bpm) {
  return Math.round((1000 / bpm) * 60);
}
