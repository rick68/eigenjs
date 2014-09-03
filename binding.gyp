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
              'ExceptionHandling': 1, # /EHsc
              'AdditionalOptions': [ '/GR' ]
            }
          },
          'msvs_disable_warnings': [
            4018, # signed/unsigned mismatch
            4506  # no definition for inline function 'function'
          ]
        }],
        ['OS=="linux" or OS=="freebsd" or OS=="openbsd" or OS=="solaris"', {
          'cflags': [ '-std=c++11' ],
          'cflags_cc!': [ '-fno-rtti', '-fno-exceptions' ]
        }],
        ['OS=="mac"', {
          'xcode_settings': {
            'GCC_ENABLE_CPP_EXCEPTIONS': 'YES',
            'GCC_ENABLE_CPP_RTTI': 'YES',
            'OTHER_CPLUSPLUSFLAGS': [ '-std=c++11', '-stdlib=libc++' ],
            'OTHER_LDFLAGS': [ '-stdlib=libc++' ],
            'MACOSX_DEPLOYMENT_TARGET': '10.7'
          }
        }]
      ]
    }
  ]
}
