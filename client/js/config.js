angular.module('nibs.config', [])

    .constant('SERVER_URL', null)

    .constant('FB_APP_ID','1886532414898182')

    .constant('STATUS_LABELS', [
        'Super',
        'Ultra',
        'VIP'
    ])

    .constant('STATUS_DESCRIPTIONS', [
        'Super. Clientes Super iniciaram a jornada com a Ultragaz, mas rapidamente se tornam ultra !',
        'Ultra. Compartilham suas experiência com as receitas e já realizam alguns pedidos.',
        'VIP. Estão em constante contato com a Ultra e recebem grandes vantagens.'
    ]);
