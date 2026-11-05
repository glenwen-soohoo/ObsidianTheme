const { Plugin } = require("obsidian");

const BODY_CLASS = "presentation-mode";

module.exports = class PresentationToggle extends Plugin {
    async onload() {
        const saved = await this.loadData();
        this.enabled = saved ? saved.enabled === true : false;
        this.apply();

        this.ribbon = this.addRibbonIcon("presentation", "簡報模式", () => this.toggle());

        this.addCommand({
            id: "toggle-presentation-mode",
            name: "切換簡報模式",
            callback: () => this.toggle(),
        });
    }

    onunload() {
        document.body.classList.remove(BODY_CLASS);
    }

    apply() {
        document.body.classList.toggle(BODY_CLASS, this.enabled);
        if (this.ribbon) {
            this.ribbon.toggleClass("is-active", this.enabled);
        }
    }

    async toggle() {
        this.enabled = !this.enabled;
        this.apply();
        await this.saveData({ enabled: this.enabled });
    }
};
