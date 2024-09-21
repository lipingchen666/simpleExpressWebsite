export const ProgressBar = ({
    percent,
    numCompleted,
    numTotal,
}) => {
    const progressDiv = document.createElement('div');
    progressDiv.className = 'ui small indicating progress active';
    progressDiv.setAttribute('data-percent', '80');

    // Create the inner bar div with style
    const barDiv = document.createElement('div');
    barDiv.className = 'bar';
    barDiv.style.transitionDuration = '300ms';
    barDiv.style.width = `${percent}%`;

    // Create the label div with text
    const labelDiv = document.createElement('div');
    labelDiv.className = 'label';
    labelDiv.innerText =  `${numCompleted} of ${numTotal} tasks complete`;

    // Append the bar and label divs to the outer progress div
    progressDiv.appendChild(barDiv);
    progressDiv.appendChild(labelDiv);

    // Return the complete progress node
    return progressDiv;
}