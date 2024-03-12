const tg = window.Telegram.WebApp;

export function useTelegram() {
    const onClose = () => {
        tg.close();
    }

    const onSetBackButton = () => {
        tg.BackButton.show();
        tg.BackButton.onClick(() => window.history.back());
    }

    const onToggleButton = () => {
        if (tg.MainButton.isVisible) {
            tg.MainButton.hide()
        } else {
            tg.MainButton.show()
        }
    }

    return {
        onClose,
        onToggleButton,
        onSetBackButton,
        tg,
        user: tg.initDataUnsafe?.user,
        theme: tg.themeParams,
        platform: tg.platform,
    }
};