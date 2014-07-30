{
  'targets': [
    {
      'target_name': 'eigen',
      'sources': [
        'src/EigenJS.cpp'
      ],
      'include_dirs': [
        'deps',
        "<!(node -e \"require('nan')\")"
      ],
      'conditions': [
        ['OS=="win"', {
          'msvs_settings': {
            'VCCLCompilerTool': {
              'ExceptionHandling': 1,
              'AdditionalOptions': [
                '/GR',
                '/EHsc',
                '/wd4018',
                '/wd4506'
              ]
            }
          }
        }],
        ['OS=="linux" or OS=="freebsd" or OS=="openbsd" or OS=="solaris"', {
          'cflags_cc!': [ '-fno-rtti', '-fno-exceptions' ]
        }],
        ['OS=="mac"', {
          'xcode_settings': {
            'GCC_ENABLE_CPP_EXCEPTIONS': 'YES',
            'GCC_ENABLE_CPP_RTTI': 'YES'
          }
        }]
      ]
    }
  ]
}
