export default (content, summary, platforms) => {
    if (platforms) {
        return `<details>
            <summary>${summary}</summary>
            ${content}
            Platforms: ${platforms}</details>`
    } else {
        return `<details>
        <summary>${summary}</summary>
        ${content}</details>`
    }
};