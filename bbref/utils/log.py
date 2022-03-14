import colorlog

handler = colorlog.StreamHandler()
handler.setFormatter(
    colorlog.ColoredFormatter(
        fmt='%(log_color)s %(asctime)s %(levelname)s [%(name)s] -- %(message)s',
    )
)

logger = colorlog.getLogger(__name__)
logger.setLevel(colorlog.DEBUG)
logger.addHandler(handler)
